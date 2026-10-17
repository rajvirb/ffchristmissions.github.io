---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
#logo: ""
header:
  image_fullwidth: header_unsplash_12.jpg
widget1:
  title: "Testimonies"
  url: 'https://www.youtube.com/@fishersforchristmission473/videos'
  text: 'We share testimonies on YouTube about what the Lord has done in the lives of other people. Feel free to check out our channel to get a taste of what the Lord has done'
  video: '<a href="#" data-reveal-id="videoModal"><img src="https://ffchristmissions.github.io/images/Cross.png" width="302" height="182" alt=""/></a>'
widget2:
  title: "Our Missions"
  url: '/our-missions/'
  image: all-in-hands.jpg
  text: 'We are serving people all around the world, as an extension of the love of God to all people. Have a look on our Missions page to learn more about what the Lord is doing in lives of other people'
widget3:
  title: "About Us"
  url: '/about-us/'
  image: widget-1-302x182.jpg
  text: 'Do you want to know more about who we are? Click on the link below to find out more'
#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#
#callforaction:
#  url: https://tinyletter.com/feeling-responsive
#  text: Inform me about new updates and features ›
#  style: alert
permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---

<div id="videoModal" class="reveal-modal large" data-reveal="">
  <div class="flex-video widescreen vimeo" style="display: block;">
    <iframe width="1280" height="720" src="https://www.youtube.com/embed/dz_J4hJCyTc" frameborder="0" allowfullscreen></iframe>
  </div>
  <a class="close-reveal-modal">&#215;</a>
</div>