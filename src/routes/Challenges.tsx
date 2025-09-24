import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { challenges, challengeNav } from '@/data/challenges'
import HeroBar from '@/shared/HeroBar'
import { toggleLike, shareContent, getLikeCount, hasUserLiked } from '@/utils/engagementUtils'


function renderBodyItem(item: any, i: number) {
  // 1) 纯字符串：按编号自动判断层级
  if (typeof item === 'string') {
    if (/^\d+\.\d+\.\d+/.test(item)) {
      return <h4 key={`h4-${i}`} className="h3 text-sr-text-primary">{item}</h4>;
    }
    if (/^\d+\.\d+/.test(item)) {
      return <h3 key={`h3-${i}`} className="h3 text-sr-text-primary">{item}</h3>;
    }
    if (/^\d+/.test(item)) {
      return <h2 key={`h2-${i}`} className="h2 text-sr-text-primary">{item}</h2>;
    }
    return <p key={`p-${i}`} className="body text-sr-text-secondary">{item}</p>;
  }

  // 2) 对象：按 type 渲染
  if (item && typeof item === 'object' && 'type' in item) {
    if (item.type === 'paragraph') {
      return <p key={`p-${i}`} className="body text-sr-text-secondary" dangerouslySetInnerHTML={{ __html: item.content }} />;
    }
    if (item.type === 'bullet') {
      const pad = item.level ? item.level * 16 : 16;
      return (
        <div key={`b-${i}`} style={{ paddingLeft: pad }}>
          <div className="flex gap-2">
            <span>•</span>
            <span className="body text-sr-text-secondary" dangerouslySetInnerHTML={{ __html: item.content }} />
          </div>
        </div>
      );
    }
    if (item.type === 'quote') {
      return (
        <blockquote key={`q-${i}`} className="border-l-4 border-gray-300 pl-4 italic body text-sr-text-secondary">
          <p dangerouslySetInnerHTML={{ __html: item.content }} />
          {item.cite ? <cite className="not-italic text-sr-text-secondary block mt-2">— {item.cite}</cite> : null}
        </blockquote>
      );
    }
  }

  console.warn('Unknown body item:', item);
  return null;
}

export default function Challenges() {
  const { slug } = useParams()
  const current = challenges.find(c => c.slug === slug) || challenges[0]

  // 状态管理 - Use real engagement data
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)

  // Initialize engagement data on component mount
  useEffect(() => {
    const initialLikeCount = getLikeCount(current.slug);
    const userHasLiked = hasUserLiked(current.slug);

    setLikeCount(initialLikeCount);
    setLiked(userHasLiked);
  }, [current.slug]);

  // 处理函数
  const handleLike = () => {
    const result = toggleLike(current.slug);
    setLiked(result.liked);
    setLikeCount(result.newCount);
  }
  
  const handleShare = async () => {
    await shareContent(current.title, window.location.href);
  }

  
  return (
    <div>
      <HeroBar src={current.heroImage} alt={current.title}>
        <div className="h-full w-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-[540px] pl-6 border-l-4 border-white/70 py-6 text-white/90">
              {challengeNav.map(item => {
                const active = item.slug === current.slug
                return (
                  <div key={item.slug} className="my-2">
                    <Link to={`/challenges/${item.slug}`} className={active ? 'font-semibold text-white' : 'text-white/80 hover:text-white'}>
                      {item.label}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </HeroBar>

      <section className="container mx-auto px-6 pt-10 pb-16 min-h-[50vh]">
        <h1 className="h1 text-sr-text-primary">{current.title}</h1>
        <div className="mt-8 space-y-10">
          {current.sections.map((s, idx) => (
            <div key={idx} className="max-w-4xl">
              <h2 className="h2 text-sr-text-primary">{s.heading}</h2>
  
              {Array.isArray(s.body) ? (
                <div className="article-content space-y-4">
                  {s.body.map((item, i) => renderBodyItem(item, i))}
                </div>
              ) : (
                // 非数组时谨慎渲染
                typeof s.body === 'string'
                  ? <p className="body text-sr-text-secondary">{s.body}</p>
                  : null
              )}

            </div>
          ))}
        </div>

        {/* 点赞和分享栏 */}
        <div className="engagement-bar">
          <button 
            onClick={handleLike}
            className={`like-btn ${liked ? 'liked' : ''}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={liked ? 'white' : 'currentColor'}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span>{liked ? 'Liked' : 'Like'} {likeCount > 0 && `(${likeCount})`}</span>
          </button>
          
          <button 
            onClick={handleShare}
            className="share-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
            </svg>
            <span>Share</span>
          </button>
        </div>
      </section>
    </div>
  )
}