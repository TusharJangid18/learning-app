export const fetchCourses = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          title: 'React Basics',
          description: 'Learn fundamentals of React',
          lessons: [
            {
              id: 'l1',
              title: 'Introduction',
              description: 'Overview of React',
              content: 'Full content of React introduction...',
            },
            {
              id: 'l2',
              title: 'Components',
              description: 'Understanding components',
              content: 'Full content about components...',
            },
          ],
        },
        {
          id: '2',
          title: 'React Native',
          description: 'Build mobile apps using React Native',
          lessons: [],
        },
      ]);
    }, 1000);
  });
};
