$(document).ready(function() {
            $('#videoModal').on('show.bs.modal', function(event) {
                var button = $(event.relatedTarget);
                var videoId = button.data('video-id');
                var modal = $(this);
                modal.find('iframe').attr('src', 'https://www.youtube.com/embed/' + videoId);
            });

            $('#videoModal').on('hide.bs.modal', function() {
                var modal = $(this);
                modal.find('iframe').attr('src', '');
            });
        });