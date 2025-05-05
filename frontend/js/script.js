
        document.getElementById('subscribeForm').addEventListener('submit', async function(e) {
            e.preventDefault();
        
            const form = this;
            const formData = new FormData(form);
        
            const response = await fetch(form.action, {
                method: "POST",
                body: formData
            });
        
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Subscribed!',
                    text: `Thanks for subscribing! A confirmation has been sent to your email.`,
                    confirmButtonColor: '#0dcaf0'
                });
                form.reset();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong. Please try again later.'
                });
            }
        });
       
        var lazyLoadInstance = new LazyLoad({
            elements_selector: ".lazy"
        });
        (function($) {
            "use strict"

            $('#subscribe').on('submit', function() {
                event.preventDefault();

                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $.ajax({
                        type: "POST",
                        url: "",
                        data: {
                            email: $('#subemail').val()
                        },
                        success: function(data) {
                            // show response from the php script.
                            $('#response').html("Thanks For Subscribed Me");
                        }
                    })
                    .fail(function(error) {
                        preloader.style.display = 'none';
                        var err = "<p class='text-white'>Please Enter Valid Url</p>";
                        $('#response').html(err);
                    })
            });


            // Contact Message send 
            $('#contact').on('submit', function() {
                event.preventDefault();
                var name = $('#name').val();
                var email = $('#email').val();
                var subject = $('#subject').val();
                var message = $('#message').val();

                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $.ajax({
                    type: "POST",
                    url: "",
                    data: {
                        name: name,
                        email: email,
                        subject: subject,
                        message: message,
                    },
                    success: function(data) {
                        $('#name').val("");
                        $('#email').val("");
                        $('#subject').val("");
                        $('#message').val("");
                        // show response from the php script.
                        $('.contact-msg').html(data);

                    }
                })
            });
        })(jQuery);

    const modal = document.getElementById('hireModal');
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');

    openBtn.onclick = function(e) {
      e.preventDefault();
      modal.style.display = 'block';
    }

    closeBtn.onclick = function() {
      modal.style.display = 'none';
    }

    window.onclick = function(e) {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    }


  




    
