const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug')
app.use(express.static('dist'))
app.get('/', (req, res) => res.render('index', {
  images: [
    {
      src: 'image2.jpg',
      alt: 'image2',
    },
    {
      src: 'image1.jpg',
      alt: 'image1',
    },
    {
      src: 'image2.jpg',
      alt: 'image2',
    },
  ],
  content: {
    header: 'Lorem Ipsum',
    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie lectus lacus, eget tempor nulla volutpat hendrerit. Vestibulum eget nibh quis lorem tincidunt eleifend a ut risus. Morbi felis ex, sodales non varius eu, gravida id ipsum. Nunc efficitur risus at sagittis vestibulum. Proin id sapien nisi. Nulla interdum molestie egestas. Curabitur sollicitudin ac nunc eget tristique. In efficitur tristique elit at tincidunt. Morbi eget gravida ex. Phasellus pellentesque blandit congue. Nam vestibulum iaculis finibus.Sed purus neque, consequat sit amet congue at, faucibus quis quam. Fusce eleifend, lectus tempor suscipit sagittis, nunc augue faucibus sem, eget aliquam est dui quis ipsum.',
    text2: 'Curabitur finibus pulvinar sem, id sagittis urna luctus nec. Aenean nunc lectus, dapibus sit amet lacus non, iaculis tincidunt lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec et gravida risus, at semper orci. Nunc efficitur erat porttitor magna euismod, eu vestibulum nulla pharetra. Suspendisse laoreet ut augue ut blandit. Nam dapibus massa diam, quis mollis elit scelerisque non. Nulla consequat eget dolor sit amet rhoncus.',
  },
}));

app.listen(port);

