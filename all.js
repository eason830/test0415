// 避免點擊下拉式選單內容關閉
$('.dropdown-menu').on("click.bs.dropdown", function (e) {
  e.stopPropagation();
  e.preventDefault();
});
// 避免點擊下拉式選單內容關閉




// if (window.innerWidth <= 992) {
//   $('.dropdown').click(function () {
//     $('.dropdown').toggleClass('show');
//     $('.dropdown-menu').toggleClass('show');
//   })
// }
// 下拉式選單 hover效果
// if (window.innerWidth >= 992) {
//   $('.dropdown').hover(function () {
//     $(this).addClass('show');
//     $(this).find('.dropdown-menu').addClass('show');
//   }, function () {
//     $(this).removeClass('show');
//     $(this).find('.dropdown-menu').removeClass('show');
//   });
// }
// window.addEventListener('resize', function () {
//   if (window.innerWidth >= 992) {
//     $('.dropdown').hover(function () {
//       $('.dropdown').addClass('show');
//       $('.dropdown').find('.dropdown-menu').addClass('show');
//     }, function () {
//       $('.dropdown').removeClass('show');
//       $('.dropdown').find('.dropdown-menu').removeClass('show');
//     });
//   }
//   if (window.innerWidth <= 992) {
//     $('.dropdown').click(function () {
//       $('.dropdown').toggleClass('show');
//       $('.dropdown-menu').toggleClass('show');
//     })
//   }
// })
// 下拉式選單 hover效果





