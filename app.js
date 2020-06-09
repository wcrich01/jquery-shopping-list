$(document).ready(function(){
    
    function onAdd(){
    let $ul, $li, $label, $div, value;
        //Get the value of the item to add
    value = $(".js-new-item").val();
        
    if(value === '')
        return;
        
    $ul = $('ul');
    //Create new li and add it to the ul
    $li = $('<li>').appendTo($ul);
    //Create new div and add it to the li
    $div = $('<div>').addClass('checkbox').appendTo($li);
    //Create new label and add it to the div
    $label = $('<label>').appendTo($div);
    
    $('<input>')
        .attr('type', 'checkbox')
        .addClass('item')
        .attr('name', 'list')
        .click(toggleRemoved)
        .appendTo($label);
        
    $label.append(value)
    $(".js-new-item").val('');

    }
    
function toggleRemoved(event){
    let $el;
    $el = $(event.currentTarget);
    $el.closest('li').toggleClass('removed');
    }
    
    
function onChangeTitle(){
    $('h2').text($('.js-change-title').val());
    }
    
    $(".js-add").click(onAdd);
    $(".js-item").click(toggleRemoved);
    $('.js-change-title').keyup(onChangeTitle);

});