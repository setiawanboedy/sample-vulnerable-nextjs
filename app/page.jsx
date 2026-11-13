import { nanoid } from 'nanoid';

export default function HomePage({ searchParams }) {
  // Reachability proof: nanoid is imported and invoked in server component
  const requestId = nanoid();
  const userGreeting = searchParams?.greeting || 'Welcome to our platform!';

  return (
    <main>
      <h1>Security Auditing Testbed</h1>
      <p>Request ID: <code>{requestId}</code></p>

      <div id="greeting-box">
        {userGreeting}
      </div>
    </main>
  );
}