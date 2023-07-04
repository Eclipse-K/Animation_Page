function ContentInput({
  title,
  year,
  since,
  content,
  setTitle,
  setYear,
  setSince,
  setContent,
  handleSubmit,
}) {
  return (
    <div>
      <label htmlFor="title">제목: </label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="year">연도: </label>
      <input
        type="text"
        id="year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <label htmlFor="since">연대: </label>
      <input
        type="text"
        id="since"
        value={since}
        onChange={(e) => setSince(e.target.value)}
      />

      <label htmlFor="content">내용: </label>
      <input
        type="text"
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default ContentInput;
