<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px; margin: auto"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            <img class="card-img" :src="restaurant.image" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="deleteFavorite()"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFavorite()"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";

/* eslint-disable */
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Myron Kuphal PhD",
      tel: "(261) 868-4875",
      address: "15909 Kacie Extensions",
      opening_hours: "08:00",
      description: "Libero officiis autem.\nIusto nemo repellendus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.087527880837634",
      viewCounts: 1,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-28T10:07:05.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 22,
      name: "Mr. Nils Weimann",
      tel: "552-422-6990",
      address: "46223 Pattie Tunnel",
      opening_hours: "08:00",
      description: "Esse sed sed aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.84236753088639",
      viewCounts: 0,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 23,
      name: "Jacinthe Hauck",
      tel: "983-921-5639 x54706",
      address: "3609 Angeline Village",
      opening_hours: "08:00",
      description: "Nisi neque molestias aliquam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=23.695911598057684",
      viewCounts: 0,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 24,
      name: "Wellington Roberts",
      tel: "1-302-750-0722",
      address: "788 Cecilia Plaza",
      opening_hours: "08:00",
      description: "Nihil tempora perferendis rerum maiores similique ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.083398726966266",
      viewCounts: 0,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 25,
      name: "Hilma Gleichner V",
      tel: "(148) 217-3855 x7579",
      address: "24677 Rosella Trail",
      opening_hours: "08:00",
      description: "Omnis sed earum expedita aperiam est dolores. Quo ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=32.54717757891261",
      viewCounts: 0,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 21,
      name: "Miss Jevon Turcotte",
      tel: "873-811-1456 x28042",
      address: "243 Hickle Dam",
      opening_hours: "08:00",
      description: "a",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=85.30554568511448",
      viewCounts: 0,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 27,
      name: "Davon Rice",
      tel: "916.527.4724 x73726",
      address: "5337 Fae Pines",
      opening_hours: "08:00",
      description: "Nam quia aliquam. Autem accusantium quia minima su",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.3453665610373",
      viewCounts: 0,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 28,
      name: "Maida Bins",
      tel: "1-858-217-8799 x858",
      address: "7887 Francisco Fork",
      opening_hours: "08:00",
      description: "omnis maiores quis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.0117778166844",
      viewCounts: 0,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 29,
      name: "Efren Senger DDS",
      tel: "488.201.6025",
      address: "443 Walter Inlet",
      opening_hours: "08:00",
      description: "Sit dolor eaque harum distinctio quis. Recusandae ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.19464993751091",
      viewCounts: 0,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 30,
      name: "Dejuan Romaguera",
      tel: "592-227-8781 x1828",
      address: "293 August Crest",
      opening_hours: "08:00",
      description: "Saepe necessitatibus temporibus. Ea placeat et nis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.75565980267938",
      viewCounts: 0,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchTopReataurants();
  },
  methods: {
    fetchTopReataurants() {
      this.restaurants = dummyData.restaurants;
    },
    addFavorite() {
      this.restaurants = {
        ...this.restaurants, // 保留餐廳原有資料
        isFavorited: true,
      };
    },
    deleteFavorite() {
      this.restaurants = {
        ...this.restaurants, // 保留餐廳原有資料
        isFavorited: false,
      };
    },
  },
};
</script>