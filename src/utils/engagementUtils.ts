// Utility functions for handling likes and engagement data

interface EngagementData {
  [pageSlug: string]: {
    likes: number;
    likedUsers: string[]; // Store user IDs who have liked
  };
}

// Generate a simple user ID (in production, use proper authentication)
export const getUserId = (): string => {
  let userId = localStorage.getItem('userId');
  if (!userId) {
    userId = 'user_' + Math.random().toString(36).substr(2, 9) + Date.now();
    localStorage.setItem('userId', userId);
  }
  return userId;
};

// Get engagement data from localStorage
export const getEngagementData = (): EngagementData => {
  const data = localStorage.getItem('engagementData');
  return data ? JSON.parse(data) : {};
};

// Save engagement data to localStorage
export const saveEngagementData = (data: EngagementData): void => {
  localStorage.setItem('engagementData', JSON.stringify(data));
};

// Get like count for a specific page
export const getLikeCount = (pageSlug: string): number => {
  const data = getEngagementData();
  return data[pageSlug]?.likes || 0;
};

// Check if current user has liked a page
export const hasUserLiked = (pageSlug: string): boolean => {
  const data = getEngagementData();
  const userId = getUserId();
  return data[pageSlug]?.likedUsers.includes(userId) || false;
};

// Toggle like for a page
export const toggleLike = (pageSlug: string): { liked: boolean; newCount: number } => {
  const data = getEngagementData();
  const userId = getUserId();

  if (!data[pageSlug]) {
    data[pageSlug] = { likes: 0, likedUsers: [] };
  }

  const pageData = data[pageSlug];
  const userIndex = pageData.likedUsers.indexOf(userId);

  if (userIndex > -1) {
    // User has already liked, so unlike
    pageData.likedUsers.splice(userIndex, 1);
    pageData.likes = Math.max(0, pageData.likes - 1);
    saveEngagementData(data);
    return { liked: false, newCount: pageData.likes };
  } else {
    // User hasn't liked, so like
    pageData.likedUsers.push(userId);
    pageData.likes += 1;
    saveEngagementData(data);
    return { liked: true, newCount: pageData.likes };
  }
};

// Share functionality
export const shareContent = async (title: string, url: string): Promise<void> => {
  const shareData = {
    title: title,
    text: `Check out this article: ${title}`,
    url: url
  };

  try {
    if (navigator.share && navigator.canShare(shareData)) {
      await navigator.share(shareData);
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(url);
      // Show a toast or alert (you can replace with a proper toast component)
      const event = new CustomEvent('showToast', {
        detail: { message: 'Link copied to clipboard!' }
      });
      window.dispatchEvent(event);
    }
  } catch (err) {
    console.error('Error sharing:', err);
    // Fallback: try to copy to clipboard
    try {
      await navigator.clipboard.writeText(url);
      const event = new CustomEvent('showToast', {
        detail: { message: 'Link copied to clipboard!' }
      });
      window.dispatchEvent(event);
    } catch (copyErr) {
      console.error('Error copying to clipboard:', copyErr);
    }
  }
};