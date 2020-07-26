import React, { Component } from 'react';
import $ from 'jquery';
import superplaceholder from 'superplaceholder';


class SearchBar extends Component {

    componentDidMount() {
        var placehoder = document.querySelector('.search-box-inner input');
        var pText = placehoder.placeholder;

        const sp = superplaceholder({
            el: placehoder,
            sentences: [pText],
            options: {
            loop: true
          }
        });
        
        sp.start();

        $('select').each(function(){
            var $this = $(this), numberOfOptions = $(this).children('option').length;
            var overflow = numberOfOptions > 5 ? 'overflow-y' : '';
            $this.addClass('select-hidden'); 
            $this.wrap('<div class="select"></div>');
            $this.after('<div class="select-styled"></div>');
      
            var $styledSelect = $this.next('div.select-styled');
            $styledSelect.text($this.children('option').eq(0).text());
          
            var $list = $('<ul />', {
                'class': 'select-options'
            }).insertAfter($styledSelect);
          
            for (var i = 0; i < numberOfOptions; i++) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo($list);
            }
          
            var $listItems = $list.children('li');
          
            $styledSelect.click(function(e) {
                e.stopPropagation();
                $('div.select-styled.active').not(this).each(function(){
                    $(this).removeClass('active').next('ul.select-options').hide();
                });
                $(this).toggleClass('active').next('ul.select-options').addClass(overflow).toggle();
            });
          
            $listItems.click(function(e) {
                e.stopPropagation();
                $styledSelect.text($(this).text()).removeClass('active');
                $this.val($(this).attr('rel'));
                $('select option').removeAttr('selected');
              $('select option[value="'+$(this).attr('rel')+'"]').attr('selected','selected');
              // Only Woo Orderby
              if ($this.hasClass('orderby')) {
                $(this).closest( 'form' ).submit();
            }
                $list.hide();
            });
          
            $(document).click(function() {
                $styledSelect.removeClass('active');
                $list.hide();
            });
      
        });

        
    
    }

    render() {
        return (
            <div className="domain-search-box mt-40">
                <div className="search-box-inner">
                    <form action="#">
                        <input type="text" placeholder="Find your new domain name" />
                        <span>
                            <select className="domain-list select_design">
                                <option value={1}>.com</option>
                                <option value={2}>.net</option>
                                <option value={3}>.org</option>
                            </select>
                        </span>
                        <button type="submit">search</button>
                    </form>
                </div>
            </div>            
        )
    }
}

export default SearchBar
