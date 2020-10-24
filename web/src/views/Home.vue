<template>
  <div id="home">
    <div class="t_bg mktg-container mktg-bg--dancer">
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
            <img src="../common/img/avatar.jpg" alt="" class="img_bd" />
          </v-col>

          <v-col class="mb-4">
            <h1 class="display-2  mb-3">
              Hello,I'm Yukiice
            </h1>
            <p class="subheading font-weight-regular">
              Welcome to my homepage,
              <br />You can contact me by email
              <a href="mailto:yukiice1006@foxmail.qq.com" target="_blank"
                >Discord Community</a
              >
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="m1_bg">
      <v-container>
        <v-row class="text-center">
          <v-col class="mb-5" cols="12">
            <h2 class="headline font-weight-bold mb-3">How to develop this website</h2>

            <v-row justify="center">
              <a
                v-for="(next, i) in whatsNext"
                :key="i"
                :href="next.href"
                class="subheading mx-3"
                target="_blank"
              >
                {{ next.text }}
              </a>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="m2_bg">
      <v-container>
        <v-row class="text-center">
          <v-col class="mb-5" cols="12">
            <h2 class="headline font-weight-bold mb-3">Important Links</h2>

            <v-row justify="center">
              <a
                v-for="(link, i) in importantLinks"
                :key="i"
                :href="link.href"
                class="subheading mx-3"
                target="_blank"
              >
                {{ link.text }}
              </a>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="m3_bg">
      <v-container>
        <v-row class="text-center">
          <v-col class="mb-5" cols="12">
            <h2 class="headline font-weight-bold mb-3">Important Links</h2>

            <v-row justify="center">
              <a
                v-for="(link, i) in importantLinks"
                :key="i"
                :href="link.href"
                class="subheading mx-3"
                target="_blank"
              >
                {{ link.text }}
              </a>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="m4_bg">
      <v-container>
        <v-row class="text-center">
          <v-col class="mb-5" cols="12">
            <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

            <v-row justify="center">
              <a
                v-for="(eco, i) in ecosystem"
                :key="i"
                :href="eco.href"
                class="subheading mx-3"
                target="_blank"
              >
                {{ eco.text }}
              </a>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- 底部条 -->
    <div class="b_bg">
      <v-container>
        <v-row class="text-center">
          <v-col class="mb-5" cols="12">
            <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

            <v-row justify="center">
              <a
                v-for="(eco, i) in ecosystem"
                :key="i"
                :href="eco.href"
                class="subheading mx-3"
                target="_blank"
              >
                {{ eco.text }}
              </a>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href:
          "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.img_bd {
  width: 180px;
  height: 180px;
  border-radius: 50% !important;
}
.mktg-container.mktg-bg--dancer {
      background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.1)),to(rgba(0,0,0,.5))),url(../common/img/t_bg.png);
  background-image: linear-gradient(90deg,rgba(0,0,0,.1) 0,rgba(0,0,0,.5)),url(../common/img/t_bg.png);
  background-size: cover;
  background-position: 40%;
  height: 600px;
}
.mktg-container {
  overflow: hidden;
}

// m1 bg
.m1_bg{
      background-color: #F2F2F2;
      height: 600px;
}

// m2 bg
.m2_bg{
  background: #F8F8F8;
}

// m3 bg
.m3_bg{
  background-repeat: no-repeat;
    background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.4)),to(rgba(0,0,0,.4))),url(../common/img/m3_bg.png);
    background-image: linear-gradient(90deg,rgba(0,0,0,.4) 0,rgba(0,0,0,.4)),url(../common/img/m3_bg.png);
    background-position: top;
    background-size: cover;
    height: 330px;
}

//  m4 bg
.m4_bg{
  background: #007A73;
}

//b bg  

</style>
