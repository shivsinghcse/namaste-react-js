## 🧱 Monolith Architecture – Explained Simply

- Monolith architecture is a traditional model for designing software applications. In a monolithic architecture, the entire application is built as a single, tightly coupled unit.

### 🔧 Key Characteristics:

#### 1. Single Codebase:

- Everything (frontend, backend logic, database access, etc.) is part of one big application.

#### 2. Single Deployment:

- The entire app is built, tested, and deployed together. You can’t deploy only one part independently.

#### 3. Tightly Coupled Components:

- All components are dependent on each other. A change in one module might affect others.

#### 4. Shared Database:

- Usually, the entire application communicates with a single shared database.

#### 📦 Example:

Imagine you're building an e-commerce app with:

- User authentication
- Product catalog
- Shopping cart
- Order processing
- Payment gateway

In a monolithic architecture, all these features live in one codebase and run as one application.

### ✅ Advantages:

- Simple to develop (good for early-stage startups).

- Easy to test since everything is in one place.

- Straightforward deployment.

- Better performance for small apps (less inter-service communication).

### ❌ Disadvantages:

- Hard to maintain as the codebase grows.

- Scaling means duplicating the whole app (even if only one part is under load).

- Slower development in big teams (merge conflicts, tight coupling).

- A bug in one part can bring down the whole system.

- Difficult to adopt new technologies in only one part.

### 🔄 Monolith vs Microservices:

| Feature                | Monolith        | Microservices             |
| ---------------------- | --------------- | ------------------------- |
| Deployment             | One unit        | Independent services      |
| Scalability            | Whole app       | Service-specific          |
| Development Speed      | Slows with size | Faster with modular teams |
| Technology Flexibility | Limited         | Flexible per service      |
| Fault Isolation        | Low             | High                      |

### 📌 When to Use Monolith?

- Small team
- Simple application
- Quick MVP (Minimum Viable Product)
- You plan to refactor into microservices later

## 🧩 Microservice Architecture – Explained Simply

Microservice architecture is a way of building an application as a collection of small, independent services, each responsible for a specific business functionality and communicating over a network (usually via APIs).

### 🔧 Key Characteristics:

#### 1. Modular Services:

- Each service handles one specific function (e.g., Auth, Payments, Orders).

#### 2. Independent Deployment:

- Services can be deployed and scaled independently.

#### 3. Decentralized Data:

- Each microservice manages its own database to ensure loose coupling.

#### 4. Inter-Service Communication:

- Services communicate using HTTP/REST, gRPC, or message queues (RabbitMQ, Kafka).

### 📦 Example:

For an e-commerce app, you could split the functionality like this:

| Service             | Responsibility                | Example Tech Stack   |
| ------------------- | ----------------------------- | -------------------- |
| **User Service**    | Signup, Login, Authentication | Node.js + MongoDB    |
| **Product Service** | Product catalog               | Python + PostgreSQL  |
| **Cart Service**    | Add to cart, view cart        | Go + Redis           |
| **Order Service**   | Place orders, order history   | Java + MySQL         |
| **Payment Service** | Handle payments               | Node.js + Stripe API |

### ✅ Advantages:

- Independent Deployment: Change and deploy only the affected service.

- Scalability: Scale services that get heavy traffic (e.g., product or cart).

- Fault Isolation: One service going down doesn't crash the whole system.

- Tech Flexibility: Use different languages or databases for different services.

- Smaller Codebases: Easier to maintain and test.

### ❌ Disadvantages:

- Complex Communication: Requires handling API calls, retries, timeouts.

- Distributed System: More moving parts → harder to debug.

- Data Consistency Issues: No shared DB → needs eventual consistency.

- DevOps Overhead: More deployment pipelines, monitoring, logging.

- Network Latency: Slower than in-memory calls in monoliths.

### 🆚 Monolith vs Microservices:

| Feature         | Monolith               | Microservices                 |
| --------------- | ---------------------- | ----------------------------- |
| Codebase        | Single, large codebase | Multiple small codebases      |
| Deployment      | All-at-once            | Service-by-service            |
| Scalability     | Scale whole app        | Scale individual services     |
| Tech Stack      | One stack              | Multiple per service          |
| Data Management | Shared DB              | Separate DB per service       |
| Complexity      | Low (initially)        | High (architecture, ops, dev) |

## API Call

There are 2 approaches how the UI/web application fetch the data fron backend

1. App loads ----> API call ---> wait for data to come(5000ms) ----> Render the UI

2. App loads ---> Render the UI ---> API call ---> Re-render

In react we always uses the 2nd approach because it gives better UX

## useEffect Hook

- first import it from React

```js
import { useEffect } from "react";
```

- use it at the top level of the component.

```js
useEffect(() => {
  console.log("UseEffect called");
}, []);
```

- It takes 2 arguments a callback function and a dependency array.
- this callback function will be called after component renders
- this is a ansynchronous function always remember it component renders first.

```js
import { useEffect } from "react";
import TopRatedRestaurant from "./TopRatedRestaurant";

const ResContainer = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
    );
    const json = await data.json();

    console.log(json);
  };

  // it will execute first because component render first
  console.log("Body rendered");

  return (
    <>
      <TopRatedRestaurant />
    </>
  );
};

export default ResContainer;
```

### useState

### search feature

- input value is bind with local state variable thats why we are able to write something in input box, while you are changing the value of the input box eventhough value is tide to the state variable
- so you have to update the state variable onChange

- on every keypress the component getting re-rendered

- when ever state variable update, react triggers a reconciliation cycle(re-renders the component)

- code slow
