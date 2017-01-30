<app>
  <script>
    import route from 'riot-route';

    route('/', () => {
      console.log('change to index');
      riot.mount('app', 'index');
    });

    route('/about', () => {
      console.log('change to about');
      riot.mount('app', 'about');
    });

    route('/links', () => {
      console.log('change to links');
      riot.mount('app', 'links');
    });
  </script>
</app>
