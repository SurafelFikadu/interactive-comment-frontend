// const Data = {
//   currentUser: {
//     image: {
//       png: "./images/avatars/image-juliusomo.png",
//       webp: "./images/avatars/image-juliusomo.webp",
//     },
//     username: "juliusomo",
//   },
//   comments: [
//     {
//       id: 1,
//       content:
//         "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
//       createdAt: "1 month ago",
//       score: 12,
//       user: {
//         image: {
//           png: "./images/avatars/image-amyrobson.png",
//           webp: "./images/avatars/image-amyrobson.webp",
//         },
//         username: "amyrobson",
//       },
//       replies: [],
//     },
//     {
//       id: 2,
//       content:
//         "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
//       createdAt: "2 weeks ago",
//       score: 5,
//       user: {
//         image: {
//           png: "./images/avatars/image-maxblagun.png",
//           webp: "./images/avatars/image-maxblagun.webp",
//         },
//         username: "maxblagun",
//       },
//       replies: [
//         {
//           id: 3,
//           content:
//             "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
//           createdAt: "1 week ago",
//           score: 4,
//           replyingTo: "maxblagun",
//           user: {
//             image: {
//               png: "./images/avatars/image-ramsesmiron.png",
//               webp: "./images/avatars/image-ramsesmiron.webp",
//             },
//             username: "ramsesmiron",
//           },
//         },
//         {
//           id: 4,
//           content:
//             "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
//           createdAt: "2 days ago",
//           score: 2,
//           replyingTo: "ramsesmiron",
//           user: {
//             image: {
//               png: "./images/avatars/image-juliusomo.png",
//               webp: "./images/avatars/image-juliusomo.webp",
//             },
//             username: "juliusomo",
//           },
//         },
//       ],
//     },
//   ],
// };

// const conatiner = document.querySelector(".container");

// const divCommentFirst = document.createElement("div");
// divCommentFirst.setAttribute("class", "comment");

// const commentCard = document.createElement("div");
// commentCard.classList.add("comment-card", "first");

// // Icon plus and minus
// const minPlus = document.createElement("div");

// const imgPlus = document.createElement("img");
// const imgMinus = document.createElement("img");

// const spanNum = document.createElement("span");

// imgPlus.setAttribute("src", "./images/icon-plus.svg");
// imgMinus.setAttribute("src", "./images/icon-minus.svg");

// minPlus.setAttribute("class", "min-plus");

// spanNum.textContent = Data.comments[0].score;

// minPlus.appendChild(imgPlus);
// minPlus.appendChild(spanNum);
// minPlus.appendChild(imgMinus);

// commentCard.appendChild(minPlus);
// divCommentFirst.appendChild(commentCard)

// conatiner.appendChild(divCommentFirst)

// // ------------------ div right ---------------------
// const divRight = document.createElement("div");
// // divRight.setAttribute("class", "right");
// divRight.classList.add("right") 

// const profileReply = document.createElement("div");
// profileReply.setAttribute("class", "pro-reply")

// const profile = document.createElement("div");
// profile.setAttribute("class", "profile");

// // img amyrobson
// const imgAmyrobson = document.createElement("img");
// imgAmyrobson.setAttribute("src", Data.comments[0].user.image.png);

// // name amyrobson
// const nameAmyrobson = document.createElement("b");
// nameAmyrobson.setAttribute("class", "name");
// nameAmyrobson.textContent = Data.comments[0].user.username;

// // duration comment amyrobson
// const durationAmyrobson = document.createElement("span");
// durationAmyrobson.textContent = Data.comments[0].createdAt

// // reply
// const reply =  document.createElement("div");
// reply.setAttribute("class", "reply");

// const replyImg = document.createElement("img");
// replyImg.src = "./images/icon-reply.svg";

// const replyText = document.createElement("span");
// replyText.textContent  = "Reply";

// const descriptionAmyrobson = document.createElement('p');
// descriptionAmyrobson.textContent = Data.comments[0].content;

// reply.appendChild(replyImg);
// reply.appendChild(replyText);

// profile.appendChild(imgAmyrobson);
// profile.appendChild(nameAmyrobson);
// profile.appendChild(durationAmyrobson);

// profileReply.appendChild(profile);
// profileReply.appendChild(reply);

// divRight.appendChild(profileReply);
// commentCard.appendChild(divRight);
// divRight.appendChild(descriptionAmyrobson);

// //  ------------------ div Comment Second  ----------------------------  //
// const divCommentSecond = document.createElement("div");
// divCommentSecond.classList.add("comment");
// conatiner.appendChild(divCommentSecond);

// const commentCardSecond = document.createElement("div");
// commentCardSecond.classList.add("comment-card", "first");
// divCommentSecond.appendChild(commentCardSecond);

// const minPlusSecond = document.createElement("div");
// minPlusSecond.classList.add("min-plus");
// commentCardSecond.appendChild(minPlusSecond);

// const spanNumSecond = document.createElement("span");
// spanNumSecond.textContent = Data.comments[1].score

// const imgPlusSecond = document.createElement("img");
// const imgMinusSecond = document.createElement("img");

// imgPlusSecond.setAttribute("src", "./images/icon-plus.svg");
// imgMinusSecond.setAttribute("src", "./images/icon-minus.svg");

// minPlusSecond.appendChild(imgPlusSecond)
// minPlusSecond.appendChild(spanNumSecond)
// minPlusSecond.appendChild(imgMinusSecond)

// const rightSecond = document.createElement("div");
// rightSecond.classList.add("right");
// commentCardSecond.appendChild(rightSecond);

// const profileReplySecond = document.createElement("div");
// profileReplySecond.classList.add("pro-reply");
// rightSecond.appendChild(profileReplySecond);

// const profileSecond = document.createElement("div");
// profileSecond.classList.add("profile");
// profileReplySecond.appendChild(profileSecond);

// const imgMaxblagun = document.createElement("img");
// imgMaxblagun.setAttribute("src", Data.comments[1].user.image.png);
// profileSecond.appendChild(imgMaxblagun);

// const nameMaxblagun = document.createElement("b");
// nameMaxblagun.textContent = Data.comments[1].user.username
// profileSecond.appendChild(nameMaxblagun);

// const durationMaxblagun = document.createElement("span");
// durationMaxblagun.textContent = Data.comments[1].createdAt;
// profileSecond.appendChild(durationMaxblagun);

// const replySecond = document.createElement("div");
// replySecond.classList.add("reply");
// profileReplySecond.appendChild(replySecond);

// const replyImgSecond = document.createElement("img");
// replyImgSecond.setAttribute("src", "./images/icon-reply.svg");
// replySecond.appendChild(replyImgSecond);

// const replyTextSecond = document.createElement("span");
// replyTextSecond.textContent = "Reply";
// replySecond.appendChild(replyTextSecond);

// const descriptionMaxblagun = document.createElement("p");
// descriptionMaxblagun.textContent = Data.comments[1].content;
// rightSecond.appendChild(descriptionMaxblagun)

// // --------------  div comment second first ------------- //
// const commentCardSecondFirst = document.createElement("div");
// commentCardSecondFirst.classList.add("comment-card", "second");
// divCommentSecond.appendChild(commentCardSecondFirst);

// const minPlusSecondFirst = document.createElement("div");
// minPlusSecondFirst.classList.add("min-plus");
// commentCardSecondFirst.appendChild(minPlusSecondFirst);

// const imgPlusSecondFirst = document.createElement("img");
// imgPlusSecondFirst.setAttribute("src", "./images/icon-plus.svg");
// minPlusSecondFirst.appendChild(imgPlusSecondFirst);

// const spanNumSecondFirst = document.createElement("span");
// spanNumSecondFirst.textContent = Data.comments[1].replies[0].score
// minPlusSecondFirst.appendChild(spanNumSecondFirst);

// const imgMinusSecondFirst = document.createElement("img");
// imgMinusSecondFirst.setAttribute("src", "./images/icon-minus.svg");
// minPlusSecondFirst.appendChild(imgMinusSecondFirst);

// const rightSecondFirst = document.createElement("div");
// rightSecondFirst.classList.add("right");
// commentCardSecondFirst.appendChild(rightSecondFirst);

// const profileReplySecondFirst = document.createElement("div");
// profileReplySecondFirst.classList.add("pro-reply");
// rightSecondFirst.appendChild(profileReplySecondFirst);

// const profileSecondFirst = document.createElement("div");
// profileSecondFirst.classList.add("profile");
// profileReplySecondFirst.appendChild(profileSecondFirst);

// const imgRamsesmiron = document.createElement("img");
// imgRamsesmiron.setAttribute("src", Data.comments[1].replies[0].user.image.png);
// profileSecondFirst.appendChild(imgRamsesmiron);

// const nameRamsesmiron = document.createElement("b");
// nameRamsesmiron.textContent = Data.comments[1].replies[0].user.username
// profileSecondFirst.appendChild(nameRamsesmiron);

// const durationRamsesmiron = document.createElement("span");
// durationRamsesmiron.textContent = Data.comments[1].replies[0].createdAt
// profileSecondFirst.appendChild(durationRamsesmiron);

// const replySecondFirst = document.createElement("div");
// replySecondFirst.classList.add("reply");
// profileReplySecondFirst.appendChild(replySecondFirst);

// const replyImgSecondFirst = document.createElement("img");
// replyImgSecondFirst.setAttribute("src", "./images/icon-reply.svg")
// replySecondFirst.appendChild(replyImgSecondFirst);

// const replyTextSecondFirst = document.createElement("span");
// replyTextSecondFirst.textContent = "Reply"
// replySecondFirst.appendChild(replyTextSecondFirst);

// const descriptionRamsesmiron = document.createElement("p")
// rightSecondFirst.appendChild(descriptionRamsesmiron);

// const forMaxblagun = document.createElement("span");
// forMaxblagun.classList.add("reply");
// forMaxblagun.textContent = "@maxblagun"
// descriptionRamsesmiron.appendChild(forMaxblagun);

// const forMaxblagunText = document.createElement("span");
// forMaxblagunText.textContent = " " + Data.comments[1].replies[0].content;
// descriptionRamsesmiron.appendChild(forMaxblagunText);


// // -------------------- div comment second first ---------------- //
// const commentCardSecondSecond = document.createElement("div");
// commentCardSecondSecond.classList.add("comment-card", "second");
// divCommentSecond.appendChild(commentCardSecondSecond);

// const minPlusSecondSecond = document.createElement("div");
// minPlusSecondSecond.classList.add("min-plus");
// commentCardSecondSecond.appendChild(minPlusSecondSecond);

// const imgPlusSecondSecond = document.createElement("img");
// imgPlusSecondSecond.setAttribute("src", "./images/icon-plus.svg");
// minPlusSecondSecond.appendChild(imgPlusSecondSecond);

// const spanNumSecondSecond = document.createElement("span")
// spanNumSecondSecond.textContent = Data.comments[1].replies[1].score
// minPlusSecondSecond.appendChild(spanNumSecondSecond);

// const imgMinusSecondSecond = document.createElement("img");
// imgMinusSecondSecond.setAttribute("src", "./images/icon-minus.svg");
// minPlusSecondSecond.appendChild(imgMinusSecondSecond);

// const rightSecondSecond = document.createElement("div");
// rightSecondSecond.classList.add("right");
// commentCardSecondSecond.appendChild(rightSecondSecond);

// const profileReplySecondSecond = document.createElement("div");
// profileReplySecondSecond.classList.add("pro-reply");
// rightSecondSecond.appendChild(profileReplySecondSecond);

// const profileSecondSecond = document.createElement("div");
// profileSecondSecond.classList.add("profile");
// profileReplySecondSecond.appendChild(profileSecondSecond);

// const imgJuliusomo = document.createElement("img");
// imgJuliusomo.setAttribute("src", Data.comments[1].replies[1].user.image.png);
// profileSecondSecond.appendChild(imgJuliusomo);

// const nameJuliusomo = document.createElement("b");
// nameJuliusomo.textContent = Data.comments[1].replies[1].user.username;
// profileSecondSecond.appendChild(nameJuliusomo);

// const you = document.createElement("span");
// you.setAttribute("id", "you")
// you.textContent = "you";
// profileSecondSecond.appendChild(you);

// const durationJuliusomo = document.createElement("span");
// durationJuliusomo.textContent = Data.comments[1].replies[1].createdAt;
// profileSecondSecond.appendChild(durationJuliusomo);

// const replyEditDelete = document.createElement("div");
// replyEditDelete.classList.add("reply", "edit-delete");
// profileReplySecondSecond.appendChild(replyEditDelete);

// const deleteMsg = document.createElement("div");
// deleteMsg.classList.add("delete");
// replyEditDelete.appendChild(deleteMsg);

// const deleteImg = document.createElement("img");
// deleteImg.setAttribute("src", "./images/icon-delete.svg");
// deleteMsg.appendChild(deleteImg);

// const deleteText = document.createElement("span");
// deleteText.textContent = "Delete";
// deleteMsg.appendChild(deleteText);


// const editMsg = document.createElement("div");
// editMsg.classList.add("edit");
// replyEditDelete.appendChild(editMsg);

// const editImg = document.createElement("img");
// editImg.setAttribute("src", "./images/icon-edit.svg");
// deleteMsg.appendChild(editImg);

// const editText = document.createElement("span");
// editText.textContent = "Edit";
// deleteMsg.appendChild(editText);

































// // console.log(imgMinus);
// // console.log(divCommentFirst)
// // console.log(spanNum)

// // // Ways of adding a class in JavaScript
// // let el = document.createElement("div");
// // el.className = "example-class";
// // el.classList.add("another-class");
// // el.classList.add("first-class", "second-class", "third-class");
// // el.setAttribute("class", "example-class");
// // el.classList.toggle("example-class");
// // console.log(el);