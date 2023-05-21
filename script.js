document.addEventListener('DOMContentLoaded', function() {
    // Simulating fetching news data from an API
    const newsData = [
      { title: 'New Prosecutor Appointed', date: 'May 15, 2023', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { title: 'Community Outreach Program', date: 'May 12, 2023', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { title: 'Upcoming Trial Announcement', date: 'May 10, 2023', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
    ];
  
    const newsList = document.getElementById('news-list');
  
    // Loop through newsData and create news list items dynamically
    newsData.forEach(function(newsItem) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <h3>${newsItem.title}</h3>
        <p>${newsItem.date}</p>
        <p>${newsItem.content}</p>
      `;
      newsList.appendChild(listItem);
    });
  });