export default function About() {
  return (
      <div style={{
        padding: '40px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'Segoe UI, sans-serif',
        color: '#333',
        lineHeight: 1.6,
        backgroundColor: '#f9f9f9',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '32px', color: '#2c7a7b', marginBottom: '20px' }}>About SortMeister</h1>

        <p>
          <strong>SortMeister</strong> is an interactive app that helps users learn how to properly sort waste and take better care of the environment.
        </p>

        <h2 style={{ color: '#2c5282', marginTop: '30px' }}> Why Is Waste Sorting Important?</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Reduces pollution and environmental harm</li>
          <li>Decreases landfill waste</li>
          <li>Allows for recycling and reuse of materials</li>
        </ul>

        <h2 style={{ color: '#2c5282', marginTop: '30px' }}> How to Use the App</h2>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Select a type of waste</li>
          <li>Drag it into the correct bin</li>
          <li>Get feedback on whether you sorted it correctly</li>
          <li>Repeat and improve your sorting skills!</li>
        </ol>

        <h2 style={{ color: '#2c5282', marginTop: '30px' }}> Who Is It For?</h2>
        <p>
          Students, teachers, families — anyone who wants to make a positive impact on the planet. A simple habit like sorting waste can make a big difference!
        </p>

        <div style={{
          backgroundColor: '#e6fffa',
          borderLeft: '6px solid #319795',
          padding: '16px',
          marginTop: '30px',
          borderRadius: '8px'
        }}>
           Together, we can make the planet cleaner. Start sorting waste today!
        </div>
      </div>
  );
}
