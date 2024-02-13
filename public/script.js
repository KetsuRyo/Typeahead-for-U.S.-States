$(document).ready(function() {
  $('#search').on('input', function() {
    const searchTerm = $(this).val();
    if (searchTerm.length > 0) {
      $.get(`/states?q=${searchTerm}`, function(data) {
        let items = data.map(state => `<div class="result-item" tabindex="0">${state}</div>`).join('');
        $('#results').html(items).show();
      });
    } else {
      $('#results').hide();
    }
  }).on('keydown', function(e) {
    let selected = $('.result-item.selected');
    let items = $('.result-item');
    if (e.keyCode === 40) { // 向下箭头
      e.preventDefault();
      if (!selected.length || selected.is(':last-child')) {
        items.removeClass('selected');
        items.first().addClass('selected');
      } else {
        selected.removeClass('selected').next().addClass('selected');
      }
    } else if (e.keyCode === 38) { // 向上箭头
      e.preventDefault();
      if (!selected.length || selected.is(':first-child')) {
        items.removeClass('selected');
        items.last().addClass('selected');
      } else {
        selected.removeClass('selected').prev().addClass('selected');
      }
    } else if (e.keyCode === 13 && selected.length > 0) {
      $('#search').val(selected.text());
      $('#results').hide();
    }
  });

  $(document).on('click', '.result-item', function() {
    $('#search').val($(this).text());
    $('#results').hide();
  });

  $(document).click(function(e) {
    if (!$(e.target).closest('#typeahead-container').length) {
      $('#results').hide();
    }
  });
});

