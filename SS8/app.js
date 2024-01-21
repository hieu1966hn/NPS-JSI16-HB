import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCKHY4NSQNQ6FvoJvFgmkEzEi5V5BbisbA",
  authDomain: "nps-jsi160-hb.firebaseapp.com",
  projectId: "nps-jsi160-hb",
  storageBucket: "nps-jsi160-hb.appspot.com",
  messagingSenderId: "1093128105411",
  appId: "1:1093128105411:web:f54514435789a0b2e76176",
  measurementId: "G-51JX6Q8VYF",
};

const app = initializeApp(firebaseConfig); /// Khởi tạo firebase
const db = getFirestore(app); /// Kết nối và khởi tạo database

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to render tasks
function renderTasks(tasks) {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${task.description}</span>
            <button class="deleteBtn" data-id="${task.id}">Xóa</button>
        `;
    taskList.appendChild(li);

    // Add event listener to delete button
    const deleteBtn = li.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
      deleteTask(task.id); /// Hàm xóa task
    });
  });
}

// Hàm cập nhật dữ liệu mới nhất trên db
const getTasks = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  // console.log("querySnapshot: ", querySnapshot); /// Để xem nó là gì?
  const tasks = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    description: doc.data().description,
  }));
  renderTasks(tasks); /// Cập nhật lại giao diện
};

// Function to add a task to Firestore
const addTask = async (description) => {
  await addDoc(collection(db, "tasks"), { description });
  getTasks(); /// Lấy dữ liệu mới nhất từ Database về web.
  taskInput.value = "";
};

//// Hàm xóa dữ liệu khi bấm nút delete
const deleteTask = (id) => {
  const docRef = doc(db, "tasks", id);

  deleteDoc(docRef)
    .then(() => {
      console.log("Entire Document has been deleted successfully.");
      getTasks(); /// Lấy dữ liệu mới nhất từ Database về web.
    })
    .catch((error) => {
      console.log(error);
    });
};

// Lắng nghe sự kiện khi người dùng lick vào nút thêm task => gọi hàm thêm task vào database
addTaskBtn.addEventListener("click", () => {
  const description = taskInput.value.trim();
  if (description !== "") {
    addTask(description);
  }
});

// Gọi hàm lấy dữ liệu mới nhất từ database
getTasks();
