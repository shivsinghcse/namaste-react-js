- in react you can apply inline css as JS object.
  `const style = {
  backgroundColor: '#f0f0f0',
};`
  `<div className="res-card" style={style}>
      <h3>The Lucknow Kitchen</h3>
    </div>`
  `<div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
      <h3>The Lucknow Kitchen</h3>
    </div>`
- here {} indicates there is some piece of JS and {} is JS object.

# props

- props is short form of properties.
- functional components are normal Javascript function at the end of the day.
- same as props are just normal function arguments at the end of the day.
- passing props to component:
  `<RestaurantCard
  resName="The Lucknow Kitchen"
  cuisine="Biryani . NortIndian . Asian"
/>
<RestaurantCard resName="KFC" cuisine="Burger . Fast Food" />`
- when you have to dynamically passing some data to a component you passing as a prop.
- you can pass any number of props you wish too react wrap it up as object
- destructuring on the fly
-
- config driven UI : means that your UI is basically driven by a config(data is the config)

- warning : Each child in a list should have a unique "key" property. means that when you looping/iterate on any list, each item should be uniquely represented.
  `{reslist.map((restaurant) => (
  <RestaurantCard key={restaurant.info.id} resData={restaurant} />
))}`
  - when ever looping on anything always you have to give a key
- when the component are on same level, need unique id.
- if there are no ids react will re-render all the component.
- React itself says never use indexes as the key.[Read more]
- not using Keys(not acceptable) <<<<<<< index as key <<<<<<< unique id (best practice)
