import { useParams, Link } from 'react-router-dom'
import { useState } from 'react' 
import { challenges, challengeNav } from '@/data/challenges'
import HeroBar from '@/shared/HeroBar'

export default function Challenges() {
  const { slug } = useParams()
  const current = challenges.find(c => c.slug === slug) || challenges[0]

  // 状态管理
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)

  // 处理函数
  const handleLike = () => {
    setLiked(!liked)
    setLikeCount(prev => liked ? prev - 1 : prev + 1)
  }
  
  const handleShare = async () => {
    const shareData = {
      title: current.title,
      text: `Check out this article: ${current.title}`,
      url: window.location.href
    }

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData)
      } else {
        // 后备方案：复制到剪贴板
        await navigator.clipboard.writeText(window.location.href)
        alert('Link copied to clipboard!')
      }
    } catch (err) {
      console.error('Error sharing:', err)
    }
  }

  
  return (
    <div>
      <HeroBar src={current.heroImage} alt={current.title}>
        <div className="h-full w-full flex items-center">
          <div className="container-xxl">
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

      <section className="container-xxl pt-10 pb-16 min-h-[50vh]">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{current.title}</h1>
        <div className="mt-8 space-y-10">
          {current.sections.map((s, idx) => (
            <div key={idx} className="max-w-4xl">
              <h2 className="article-h1">{s.heading}</h2>
              {Array.isArray(s.body) ? (
                <div className="article-content space-y-4">
                  {s.body.map((p, i) => {
                    // 检查是否是子标题（以数字开头， "2.1"）
                    if (/^\d+\.\d+/.test(p)) {
                      return <h3 key={i} className="article-h2">{p}</h3>
                    }
                    return <p key={i}>{p}</p>
                  })}
                </div>
              ) : (
                <p className="article-content">{s.body}</p>
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
