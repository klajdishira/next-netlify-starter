import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>EU-Africa Business Forum Facility</title>
        <meta name="description" content="EU-Africa Business Forum Facility page" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Header */}
      <header>
        <h1>EU-Africa Business Forum Facility</h1>
      </header>

      {/* About Section – centered on the screen */}
      <section className="about-section">
        <h2>What is the EU-Africa Business Forum?</h2>
        <p>
          The EU-Africa Business Forum (EABF) is further reinforced with the EABF Facility.
          The high-level event “EU-Africa Business Forum (EABF)” offers a platform for dialogue, bringing together political and business leaders
          from the European Union (EU) and Africa. Its aim is to increase investment and trade opportunities, fostering sustainable economic partnerships
          between the two continents.
        </p>
        <p>
          The forum facilitates business cooperation through business-to-business (B2B), business-to-government (B2G), and government-to-government (G2G)
          interactions, and promotes high-level public-private dialogue on key topics aligned with policy themes—such as reinforcing and integrating EU-Africa
          value chains in the spirit of the Comprehensive Strategy with Africa.
        </p>
        <p>
          The continental Forum offers business representatives a unique opportunity to raise critical issues with policymakers from both Africa and the EU,
          discuss policy reforms to improve the investment climate, and explore networking opportunities for the business community.
        </p>
        <blockquote>
          “The private sector can and must play a key role in improving speed, scale, and impact of Global Gateway investments.
          We need the private sector. That is why close cooperation with business is one very important pillar of Global Gateway.
          We are mobilising the financial firepower of Europe’s leading companies to achieve this goal.”
          <br />
          — Ursula Von der Leyen, Global Gateway Forum, 2023
        </blockquote>
        <p>
          First launched at the continental level in 2006, the EU-Africa Business Forum has grown into a landmark event held alongside the EU-Africa Summit,
          with an increasing number of regional EU Business Forums further strengthening economic ties between Europe and Africa.
        </p>
      </section>

      {/* Sectors Section */}
      <section className="sectors-section">
        <h2>Global Gateway Priority Sectors</h2>
        <div className="sectors-grid">
          <div className="sector-card">
            <span className="icon" role="img" aria-label="Digital Sector">💻</span>
            <h3>Digital Sector</h3>
            <p>IT, innovation, and connectivity driving modern business solutions.</p>
          </div>
          <div className="sector-card">
            <span className="icon" role="img" aria-label="Climate & Energy">⚡</span>
            <h3>Climate & Energy</h3>
            <p>Renewable energy and sustainable practices for a greener future.</p>
          </div>
          <div className="sector-card">
            <span className="icon" role="img" aria-label="Transport">🚆</span>
            <h3>Transport</h3>
            <p>Innovative mobility and logistics solutions enhancing connectivity.</p>
          </div>
          <div className="sector-card">
            <span className="icon" role="img" aria-label="Health">🏥</span>
            <h3>Health</h3>
            <p>Advancing healthcare services and medical technology innovations.</p>
          </div>
          <div className="sector-card">
            <span className="icon" role="img" aria-label="Education & Research">🎓</span>
            <h3>Education & Research</h3>
            <p>Fostering academic partnerships and innovative research initiatives.</p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="https://via.placeholder.com/100" alt="Jane Doe" />
            <h3>Jane Doe</h3>
            <p>Project Manager</p>
          </div>
          <div className="team-card">
            <img src="https://via.placeholder.com/100" alt="John Smith" />
            <h3>John Smith</h3>
            <p>Coordinator</p>
          </div>
          <div className="team-card">
            <img src="https://via.placeholder.com/100" alt="Mary Johnson" />
            <h3>Mary Johnson</h3>
            <p>Communications Lead</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 EU-Africa Business Forum Facility</p>
      </footer>

      {/* Global Styles */}
      <style jsx global>{`
        /* Reset & Base Styles */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          background-color: #fff;
          color: #333;
        }
        /* Header */
        header {
          background-color: #00125c;
          padding: 1.5rem;
          text-align: center;
        }
        header h1 {
          color: #ffffff;
          font-size: 2rem;
        }
        /* About Section – centered */
        .about-section {
          background-color: #f0f0f0;
          padding: 3rem 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          min-height: 60vh;
        }
        .about-section h2 {
          color: #00125c;
          margin-bottom: 1rem;
          font-size: 2rem;
        }
        .about-section p {
          max-width: 800px;
          margin-bottom: 1rem;
          font-size: 1.1rem;
          line-height: 1.5;
        }
        .about-section blockquote {
          font-style: italic;
          color: #555;
          margin: 1rem auto;
          max-width: 700px;
          padding: 1rem;
          border-left: 4px solid #9aca3c;
          background-color: #fff;
        }
        /* Sectors Section */
        .sectors-section {
          background-color: #f0f0f0;
          padding: 2rem 1rem;
          text-align: center;
        }
        .sectors-section h2 {
          color: #00125c;
          margin-bottom: 1rem;
          font-size: 2rem;
        }
        .sectors-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;
        }
        .sector-card {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 1rem;
          width: 200px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .sector-card .icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          display: block;
        }
        .sector-card h3 {
          margin-bottom: 0.5rem;
          color: #00125c;
          font-size: 1.2rem;
        }
        .sector-card p {
          font-size: 0.9rem;
          color: #555;
        }
        /* Team Section */
        .team-section {
          background-color: #f9f9f9;
          padding: 2rem 1rem;
          text-align: center;
        }
        .team-section h2 {
          color: #00125c;
          margin-bottom: 1rem;
          font-size: 2rem;
        }
        .team-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;
        }
        .team-card {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 1rem;
          width: 200px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .team-card img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-bottom: 0.5rem;
        }
        .team-card h3 {
          color: #00125c;
          margin-bottom: 0.25rem;
          font-size: 1.2rem;
        }
        .team-card p {
          font-size: 0.9rem;
          color: #555;
        }
        /* Footer */
        footer {
          background-color: #00125c;
          padding: 1.5rem;
          text-align: center;
        }
        footer p {
          color: #ffffff;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}
