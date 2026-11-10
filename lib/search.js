// Simulated database search helper
function executeSearchQuery(keyword) {
  if (!keyword) {
    return [];
  }

  // SAST Vulnerability: Raw SQL string concatenation without parameterization
  const rawQuery = "SELECT * FROM articles WHERE title LIKE '%" + keyword + "%'";
  console.log(`Executing raw SQL query: ${rawQuery}`);

  // Simulated static results
  const articles = [
    { id: 1, title: 'Introduction to Next.js App Router' },
    { id: 2, title: 'Automated Security Pipelines with LangGraph' }
  ];

  return articles.filter(a => a.title.toLowerCase().includes(keyword.toLowerCase()));
}

module.exports = { executeSearchQuery };

