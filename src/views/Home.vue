<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="post in sampleBlogPost" :key="post.id" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View more recent posts</h3>
        <div class="blog-cards">
          <BlogCard
            :post="post"
            v-for="(post, index) in sampleBlogCards"
            :key="index"
          />
        </div>
      </div>
      <div class="updates">
        <div class="container">
          <h2>Never Miss a post. Register for free now!</h2>
          <router-link class="router-button" to="#"
            >Register for FireBlogs<Arrow class="arrow arrow-light"
          /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost";
import BlogCard from "@/components/BlogCard";
import Arrow from "@/assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: { BlogPost, BlogCard, Arrow },
  data() {
    return {
      welcomeScreen: {
        title: "Hello Merph",
        blogPost:
          "One of the cool things about this font generator is that you can choose from more than 20 different styles. That means you can find a unique flair that perfectly fits what you’re trying to say.",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          id: "239438vms-222333",
          title: "Future Title",
          blogHTML: "filter post title",
          blogCoverPhoto: "designed-for-everyone",
        },
        {
          id: "2394sdfgvms-222eee333433",
          title: "Future Title",
          blogHTML: "filter post title",
          blogCoverPhoto: "beautiful-stories",
        },
      ],
    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
  },
};
</script>
<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 34px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 200;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        font-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>