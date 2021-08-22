<div class="contact-info">

  #### Contact us
  <div class="contact-us">{% for cec in site.data.contact.office %}
    <p class="map-marker-icon"> **Address:** {{ cec.address }} - {{ cec.maplocation }} </p>
    <p class="phone-icon"> **Phone:** {{ cec.address }}</p>
    <p class="envelope-o-icon"> **Email:** {{ cec.mailing }}{% endfor %}</p>
    <p class="address-book-o-icon"> **Pastor:** {% for ml in site.data.contact.pastor %}{{ ml.mailing }}{% endfor %}</p>
  </div>

  #### Follow us on:
  <div class="contacts">
    <div class="SocialBox">
      <div><a href="https://www.twitter.com/cecleeds/" target="blank"><i class="twitter-icon"></i></a></div>
      <div><a href="https://www.instagram.com/cecleeds/?hl=en" target="blank"><i class="instagram-icon"></i></a></div>
      <div><a href="https://www.facebook.com/CECLeeds/" target="blank"><i class="facebook-icon"></i></a></div>
      <div><a href="https://www.youtube.com/channel/UCALb0SwFaFdPY2gwOesvb_g" target="blank"><i class="youtube-play-icon"></i></a></div>
      <div><a href="https://www.github.com/cecleeds" target="blank"><i class="github-icon"></i></a></div>
    </div>
  </div>
</div>