import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageViewCounterProps {
  className?: string;
}

export default function PageViewCounter({ className = '' }: PageViewCounterProps) {
  const [viewCount, setViewCount] = useState<number>(0);
  const location = useLocation();

  useEffect(() => {
    // Get current page path
    const pagePath = location.pathname;

    // Get existing view counts from localStorage
    const existingViews = JSON.parse(localStorage.getItem('pageViews') || '{}');

    // Increment view count for current page
    const currentViews = (existingViews[pagePath] || 0) + 1;
    existingViews[pagePath] = currentViews;

    // Save back to localStorage
    localStorage.setItem('pageViews', JSON.stringify(existingViews));

    // Update state
    setViewCount(currentViews);

    // Calculate total site views
    const totalViews = Object.values(existingViews).reduce((sum: number, count: any) => sum + count, 0);

    // Also store total views for analytics
    localStorage.setItem('totalPageViews', totalViews.toString());

    // Optional: Send to analytics service (for future implementation)
    // sendToAnalytics(pagePath, currentViews, totalViews);

  }, [location.pathname]);

  // Get total views for display
  const getTotalViews = () => {
    const existingViews = JSON.parse(localStorage.getItem('pageViews') || '{}');
    return Object.values(existingViews).reduce((sum: number, count: any) => sum + count, 0);
  };

  return (
    <div className={`text-xs text-gray-500 ${className}`}>
      <div className="flex items-center gap-4">
        <span>Page Views: {viewCount.toLocaleString()}</span>
        <span>Total Site Views: {getTotalViews().toLocaleString()}</span>
      </div>
    </div>
  );
}