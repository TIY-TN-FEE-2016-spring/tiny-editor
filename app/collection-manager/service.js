import Ember from 'ember';

function replace(arr, item) {
  return arr.reduce((carry, curr) => {
    // Check if this is the item we are trying to replace
    if (curr._id === item._id) {
      // Add the replace value to the end of the snoball
      return [...carry, item];
    }

    // Add the current item to the end of the snoball
    return [...carry, curr];
  }, []);
}

export default Ember.Service.extend({
  collectionName: ``,
  store: [],

  apiUrl: Ember.computed(`collectionName`, function() {
    return `https://tiny-tn.herokuapp.com/collections/${this.collectionName}`;
  }),

  setCollectionName(name) {
    this.set(`collectionName`, name);
    this.set(`store`, []);
  },

  findAll() {
    if (this.loaded) {
      return this.store;
    }

    return fetch(this.get(`apiUrl`))
      .then((res) => {
        return res.json();
      }).then((result) => {
        this.set(`store`, result);
        this.set(`loaded`, true);

        return result;
      });
  },

  findById(id) {
    const existing = this.store.find((hero) => {
      return hero._id === id;
    });

    if (existing) {
      return existing;
    }

    return fetch(`${this.get(`apiUrl`)}/${id}`)
      .then((res) => {
        return res.json();
      });
  },

  update(hero) {
    return fetch(`${this.get(`apiUrl`)}/${hero._id}`, {
      method: `PUT`,
      headers: {
        Accept: `application/json`,
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(hero),
    }).then((res) => {
      return res.json();
    }).then((result) => {
      this.set(`store`, replace(this.store, result));
    });
  },
});
