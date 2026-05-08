function MyFuture() {
  return (
    <div>
      <section className="card">
        <h1>Моє майбутнє</h1>

        <p>
          Я прагну розвиватися у сфері веброзробки
          та працювати над сучасними проєктами.
        </p>
      </section>

      <section className="card">
        <h2>Мої цілі</h2>

        <div className="timeline">
          <div className="timeline-item">
            <h3>1. Вивчити React та Backend</h3>
            <p>
              Поглибити знання JavaScript,
              React та Node.js
            </p>
          </div>

          <div className="timeline-item">
            <h3>2. Стати Full Stack Developer</h3>
            <p>
              Навчитися створювати повноцінні вебсистеми
            </p>
          </div>

          <div className="timeline-item">
            <h3>3. Працювати в IT-компанії</h3>
            <p>
              Брати участь у реальних комерційних проєктах
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Мотивація</h2>

        <blockquote>
          “Success is the sum of small efforts repeated day in and day out.”
        </blockquote>
      </section>
    </div>
  );
}

export default MyFuture;