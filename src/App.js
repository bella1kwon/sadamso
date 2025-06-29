import React, { useState } from 'react';
import Slider from 'react-slick';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const members = [
  {
    name: 'Yubin Kwon',
    year: '1999',
    desc: '교육과 예술을 넘나들며 비평을 쓰고, 교육과 교육적인 것을 기획한다. 특히 조형으로부터 허구와 실재의 경계를 포착하는 다양한 형식의 미술 글쓰기에 관심이 있다. 이화여자대학교에서 동시대 미술의 페다고지 실천과 관객을 연구한다.',
  },
  { name: 'Hyunkyung Koo', desc: '' },
  { name: 'Hyun Choi', desc: '' },
  { name: 'Hee ae Baek', desc: '' },
];

function MemberCard({ name, year, desc }) {
  return (
    <div className="member-card">
      <div className="member-img-placeholder">
        {/* 이미지 자리 (디자인화) */}
        <svg width="72" height="72" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r="32" fill="#6A8BAE" stroke="#E0C36A" strokeWidth="4" />
          <text x="50%" y="54%" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold" dy=".3em">IMG</text>
        </svg>
      </div>
      <div className="member-name">{name}{year && <span className="member-year"> ({year})</span>}</div>
      <div className="member-desc">{desc}</div>
    </div>
  );
}

function HomeIntro() {
  return (
    <div className="home-intro">
      <h1>Sadamso</h1>
      <img
        src={process.env.PUBLIC_URL + '/main-visual.jpg'}
        alt="메인 비주얼"
        className="main-visual"
      />
      <p className="kor">
        사담소는 동시대 미술에서의 감상과 지식 생산을 실험하는 장소다. 우리는 전시에서 무엇을 보는가? 그리고 어떻게 남길 수 있는가? 남겨진 것은 무엇이 되는가? 전시에 관한 말들은 전시의, 때로는 전시에 포함되지 않는 것만 같은 부분으로부터 시작하지만, 알 수 없는 곳에서 멈추고 또 다른 공간을 만든다.
      </p>
      <p className="eng">
        Sadamso is a space for experimenting with perception and knowledge production in contemporary art. What do we see in an exhibition? And how do we record it? What does that record become? Our words about exhibitions often begin from within—or from something that seems to lie outside of—the exhibition itself. They pause in uncertain places and open up new spaces in return.
      </p>
    </div>
  );
}

function Author() {
  return (
    <>
      <h1 className="author-title">Author</h1>
      <div className="member-list">
        {members.map((m, i) => <MemberCard key={i} {...m} />)}
      </div>
    </>
  );
}

const textData = [
  {
    issue: '2025년 7월호',
    articles: [
      { author: '권유빈', title: '동시대 미술의 새로운 시선' },
      { author: '최현', title: '경계의 미학' },
      { author: '구현경', title: '실재와 허구 사이에서' },
      { author: '백희애', title: '관객의 역할' },
    ],
  },
  {
    issue: '2025년 6월호',
    articles: [
      { author: '권유빈', title: '예술과 교육의 접점' },
      { author: '최현', title: '비평의 언어' },
      { author: '구현경', title: '공간의 의미' },
      { author: '백희애', title: '함께 쓰는 글' },
    ],
  },
];

function TextPage() {
  return (
    <div className="text-page">
      {textData.map((issue, idx) => (
        <div className="text-issue" key={idx}>
          <div className="text-issue-badge">{issue.issue}</div>
          <hr className="text-issue-divider" />
          <div className="text-articles">
            {issue.articles.map((art, i) => (
              <div className="text-article" key={i}>
                <span className="text-author">{art.author}</span>
                <span className="text-title"> {art.title}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const cabinetImages = [
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    title: '프로젝트 A',
  },
  {
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    title: '프로젝트 B',
  },
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    title: '프로젝트 C',
  },
];

function Cabinet() {
  const settings = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    arrows: false,
    dots: true,
    swipe: true,
    touchMove: true,
    className: 'cabinet-slider',
  };
  return (
    <div className="cabinet-container">
      <Slider {...settings}>
        {cabinetImages.map((img, idx) => (
          <div className="cabinet-slide" key={idx}>
            <img src={img.src} alt={img.title} className="cabinet-img" />
            <div className="cabinet-title">{img.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

function App() {
  const [page, setPage] = useState('home');

  const goHome = () => setPage('home');
  const goAuthor = () => setPage('author');
  const goText = () => setPage('text');
  const goCabinet = () => setPage('cabinet');

  return (
    <div className="sadamso-bg">
      <header className="sadamso-header">
        <div className="sadamso-logo" onClick={goHome} style={{cursor: 'pointer'}}>
          <span>Sadamso</span>
          <span className="sadamso-home-icon" aria-label="home">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L10 3L17 9" stroke="#FFC125" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="6.5" y="10" width="7" height="6" rx="1" stroke="#FFC125" strokeWidth="2"/>
            </svg>
          </span>
        </div>
        <nav className="sadamso-nav">
          <a href="#info" onClick={goAuthor}>Info</a>
          <a href="#text" onClick={goText}>Text</a>
          <a href="#cabinet" onClick={goCabinet}>Cabinet</a>
          <a href="#news">News</a>
        </nav>
      </header>
      <main className="sadamso-main">
        {page === 'home' && <HomeIntro />}
        {page === 'author' && <Author />}
        {page === 'text' && <TextPage />}
        {page === 'cabinet' && <Cabinet />}
      </main>
    </div>
  );
}

export default App;
