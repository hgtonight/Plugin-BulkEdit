/* Copyright 2013 Zachary Doll */
$(function(){
    var DropDownString = gdn.definition('BulkEditTools');
    $('.toolbar').append(DropDownString);

    $('#BulkEditDropDown').change( function(event) {
        event.preventDefault();
        var checked = $('.BulkSelect:checked');

        if (checked.length != 0 && $(this).val() !=0) {
            var bulkform = $('form').attr({
                'action': gdn.url('plugin/bulkedit/' + $(this).val()),
                'method': 'post'
            });

            checked.detach().appendTo(bulkform);

            bulkform.submit();
        }
        else {
            // gotta check some boxes son!
            // change to modal later
            alert('You must select at least one user...');
            $(this).val(0);
        }
    });
    $('#BulkEditAction').click( function(event) {
        event.preventDefault();
        $('.BulkSelect + .iCheck-helper').click();
    });
});
