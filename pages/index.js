import Head from 'next/head';

export default function Home() {
  const colors = {
    primary: "#00125c",   // Dark blue
    secondary: "#9aca3c", // Lime green
    white: "#ffffff"
  };

  return (
    <div style={styles.container}>
      <Head>
        <title>EU-Africa Business Forum Facility</title>
        <meta name="description" content="EU-Africa Business Forum Facility page" />
      </Head>

      <header style={{ ...styles.header, backgroundColor: colors.primary, color: colors.white }}>
        <h1>
          The EU-Africa Business Forum (EABF) is further reinforced with the EABF Facility
        </h1>
      </header>

      <section style={styles.section}>
        <h2 style={{ color: colors.primary }}>What is the EU-Africa Business Forum?</h2>
        <p>
          The high-level event “EU-Africa Business Forum (EABF)” offers a platform for dialogue, bringing together
          political and business leaders from the European Union (EU) and Africa. Its aim is to increase investment and
          trade opportunities, fostering sustainable economic partnerships between the two continents. The forum
          facilitates business cooperation through business-to-business (B2B), business-to-government (B2G), and
          government-to-government (G2G) interactions, and promotes high level public-private dialogue on key topics
          aligned with the policy themes, such as reinforcing and integrating EU-Africa value chains in the spirit of the
          Comprehensive Strategy with Africa.
        </p>
        <p>
          The continental Forum offers business representatives a unique opportunity to raise critical issues with
          policymakers from both Africa and the EU, discuss policy reforms to improve the investment climate and explore
          networking opportunities for the business community.
        </p>
        <blockquote style={{ ...styles.blockquote, borderLeft: `4px solid ${colors.secondary}` }}>
          “The private sector can and must play a key role in improving speed, scale, and impact of Global Gateway
          investments. We need the private sector. That is why close cooperation with business is one very important pillar
          of Global Gateway. We are mobilising the financial firepower of Europe’s leading companies to achieve this
          goal.”
          <br />
          <cite>— Ursula Von der Leyen, Global Gateway Forum, 2023</cite>
        </blockquote>
      </section>

      <section style={styles.section}>
        <h2 style={{ color: colors.primary }}>EABF - A history of engaging the private sector for better cooperation</h2>
        <p>
          The EU-Africa Business Forum was first launched at the continental level in 2006 and has since become a landmark
          event held alongside the EU-Africa Summit. Following this first event, there has been a growing number of EU
          Business Forums (EUBFs) held across the continent, further strengthening economic ties between Europe and Africa.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={{ color: colors.primary }}>The EU-Africa Business Forum powered by the EABF Facility</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Year</th>
              <th style={styles.tableHeader}>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>2006</td>
              <td style={styles.tableCell}>Brussels</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2007</td>
              <td style={styles.tableCell}>Accra</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2009</td>
              <td style={styles.tableCell}>Nairobi</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2010</td>
              <td style={styles.tableCell}>Tripoli</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2014</td>
              <td style={styles.tableCell}>Brussels</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2017</td>
              <td style={styles.tableCell}>Abidjan</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2022</td>
              <td style={styles.tableCell}>Brussels</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2025</td>
              <td style={styles.tableCell}>Africa</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2028</td>
              <td style={styles.tableCell}>Brussels</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={styles.section}>
        <p>
          The EABF Facility was established by the European Commission in 2024 to organise the continental EU-Africa Business
          Forum every three years and support the bilateral Business Forums with its African Partners.
        </p>
        <p>
          The EABF Facility is supported by a project management team, tasked with the coordination and implementation of a
          5-year action programme. The Facility organizes activities and events cohesively, ensuring direction and fostering
          interaction among all EABF stakeholders and participants, with strategic guidance provided by DG International
          Partnerships (DG INTPA), alongside collaboration with the African Union and Business Support Organisations (BSOs).
          The programme is built on the following activities:
        </p>
        <ul>
          <li>
            Supporting the organisation of Business Fora at continental and bilateral level for strengthened G2G and B2G dialogue,
            and networking engagement with stakeholders
          </li>
          <li>
            Facilitating networking among enterprises through B2B, matchmaking, organisation of Economic/Business missions
          </li>
          <li>
            Increasing capacity of EU and African Business Organisations and building stronger linkages between BSOs, through
            training, webinars, and workshops
          </li>
          <li>
            Enhanced communication and knowledge sharing through dialogues and calls
          </li>
        </ul>
        <p>
          The Global Gateway is central to the EABF Facility, which aims to support and encourage private sector engagement around
          its strategy, priority sectors, and the political priorities endorsed by the EU-AU Summit.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={{ color: colors.primary }}>Objectives of the EABF Facility</h2>
        <p>
          A primary objective of the Facility is to position the EABF related activities within the framework of key initiatives,
          contributing to their success by engaging the private sector and involving EABF Facility stakeholders from Europe and
          Africa. Focused on sustainable development, the EABF emphasizes investments that meet environmental, social, and
          governance standards in the Global Gateway priority sectors. Ultimately, it serves as a platform that connects
          policymakers, business leaders, and financial institutions to foster economic growth and job creation across both
          continents.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={{ color: colors.primary }}>Global Gateway Priority Sectors</h2>
        <p>
          Digital Sector, Climate and Energy, Transport, Health, Education and Research
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={{ color: colors.primary }}>Stakeholders of the EU-Africa Business Forum Facility</h2>
        <p>
          The Facility has a wide array of stakeholders with varied interests, needs, and competences. The Facility will stimulate
          and leverage collaborative actions among stakeholders to improve business relations, facilitate investment, and enhance
          economic ties between governments and business communities from both continents. Stakeholder engagement is therefore
          at the core of the programme, shaping its actions and determining its outcomes. The key stakeholders for the EU-Africa
          Business Forum Facility are the EU Delegations, private companies and BSOs from both Africa and the EU.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={{ color: colors.primary }}>What the EABF Facility Offers</h2>
        <p>
          The EABF Facility offers a range of services that include the organisation of high-level events, B2Bs and matchmaking,
          facilitation of policy and political dialogues, and sharing of information and best practices. The Facility will then
          enhance synergies and coordination among stakeholders through communication, visibility and knowledge, starting by the
          EU Delegations, BSOs, and private companies.
        </p>
        <p>
          In this sense, the Facility is putting in place the INTPAEABF Digital Platform that will facilitate knowledge sharing, host
          capacity-building activities, and enhance networking opportunities. Concrete activities are:
        </p>
      </section>

      <footer style={{ ...styles.footer, backgroundColor: colors.primary, color: colors.white }}>
        <p>&copy; {new Date().getFullYear()} EU-Africa Business Forum Facility</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    lineHeight: 1.6,
    maxWidth: '800px',
    margin: '0 auto'
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
    padding: '1rem'
  },
  section: {
    marginBottom: '2rem'
  },
  blockquote: {
    paddingLeft: '1rem',
    margin: '1rem 0',
    fontStyle: 'italic'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '1rem'
  },
  tableHeader: {
    border: '1px solid #ccc',
    padding: '0.5rem',
    backgroundColor: '#f0f0f0',
    textAlign: 'left'
  },
  tableCell: {
    border: '1px solid #ccc',
    padding: '0.5rem',
    textAlign: 'left'
  },
  footer: {
    textAlign: 'center',
    marginTop: '2rem',
    padding: '1rem 0',
    borderTop: '1px solid #ccc'
  }
};
