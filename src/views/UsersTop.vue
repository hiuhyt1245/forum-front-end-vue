<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div
       v-for="user in users"
       :key="user.id"
       class="col-3"
      >
        <router-link :to="{ name: 'user', params: { id: user.id } }">
          <img
            src="http://via.placeholder.com/300x300?text=No+Image"
            width="140px"
            height="140px"
          />
        </router-link>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary">追蹤人數：{{ user.FollowerCount }}</span>
        <p class="mt-3">
          <button 
            v-if="user.isFollowed"
            type="button" 
            class="btn btn-danger"
            @click.stop.prevent="deleteFollowing(user.id)"
          >
            取消追蹤
          </button>
          <button 
            v-else
            type="button" 
            class="btn btn-primary"
            @click.stop.prevent="addFollowing(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";

/* eslint-disable */
const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$./cb.CUiUuvbIqY0PpRPpuodDigTkU0iPIfSkuG61boEvr2LIBSva",
      isAdmin: true,
      image: null,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$lZ2Rmmbv24ZPGI/lpRJGwOwyrCi0JCjC8FAWwzxhJaY9dOs5cxoPS",
      isAdmin: false,
      image: null,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$2z1YFO8kuhw78N9UvMnECOsNCdh79QCba3YJCcXg2hv3/aOxhM/6u",
      isAdmin: false,
      image: null,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  components: {
    NavTabs,
  },
  data () {
    return {
      users: []
    }
  },
  created () {
    this.fetchTopUsers ()
  },
  methods: {
    fetchTopUsers () {
        this.users = dummyData.users
      }
  },
  addFollowing (userId) {
      this.users = {
        ...users,
        followerCount: user.followerCount + 1, 
        isFollowed: true
      }
  },
  deleteFollowing (userId) {
      this.users = {
        ...users, 
        followerCount: user.followerCount - 1,
        isFollowed: false
      }
  },

};
</script>