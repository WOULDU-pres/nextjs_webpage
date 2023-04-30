export default function Home() {
  let name = '어른 Dev'
  let age = 30
  let link = 'https://www.google.com'
  return (
    <main>
      <h1 className="title">AI 마인드맵 서비스</h1>
      <p className="title-sub">by {name}</p>
      <p className="title-sub">age: {age}</p>
      <a href={ link } className="title-sub">Google</a>
    </main>
  )
}
