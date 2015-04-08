// $(document).on('ready', function() {
  
// });

$(".edit-profile").on("submit",function(){
	event.preventDefault();
	var firstName = $(".edit-profile .form-name").val();
	// console.log(firstName);
	$(".profile-name").text(firstName);
	var bio = $(".edit-profile .form-bio").val();
	$(".profile-bio").text(bio);
	var books = $(".edit-profile .form-books").val();
	$(".profile-books").text(books);
	var libraries = $(".edit-profile .form-libraries").val();
	$(".profile-libraries").text(libraries);

	// $("profile-name") = $(this ".form-name").val();
})

$(".show-form").on("click", function(){
	$(".edit-profile").css({visibility: "visible"});
	$(this).css({visibility: "hidden"});
	$(".hide-form").css({visibility: "visible"});


})

$(".hide-form").on("click", function(){
	$(".edit-profile").css({visibility: "hidden"});
	$(this).css({visibility: "hidden"});
	$(".show-form").css({visibility: "visible"});


})





// .show();