import React, { Component } from 'react';
import $ from 'jquery';
import superplaceholder from 'superplaceholder';
import JSONTree from 'react-json-tree';
import './SearchBar.scss';

let data = {
    "domain": {
        "url": "www.google.com",
        "owner": "John Adams",
        "hostname": "dns.google",
        "city": "Mountain View",
        "Appraised Value": "$10"
    }
}

const theme = {
    scheme: 'monokai',
    author: 'wimer hazenberg (http://www.monokai.nl)',
    base00: '#272822',
    base01: '#383830',
    base02: '#49483e',
    base03: '#75715e',
    base04: '#a59f85',
    base05: '#f8f8f2',
    base06: '#f5f4f1',
    base07: '#f9f8f5',
    base08: '#f92672',
    base09: '#fd971f',
    base0A: '#f4bf75',
    base0B: '#a6e22e',
    base0C: '#a1efe4',
    base0D: '#66d9ef',
    base0E: '#ae81ff',
    base0F: '#cc6633'
};



class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: true
        };
    }

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

        $('select').each(function() {
            var $this = $(this),
                numberOfOptions = $(this).children('option').length;
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
                $('div.select-styled.active').not(this).each(function() {
                    $(this).removeClass('active').next('ul.select-options').hide();
                });
                $(this).toggleClass('active').next('ul.select-options').addClass(overflow).toggle();
            });

            $listItems.click(function(e) {
                e.stopPropagation();
                $styledSelect.text($(this).text()).removeClass('active');
                $this.val($(this).attr('rel'));
                $('select option').removeAttr('selected');
                $('select option[value="' + $(this).attr('rel') + '"]').attr('selected', 'selected');
                // Only Woo Orderby
                if ($this.hasClass('orderby')) {
                    $(this).closest('form').submit();
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
            <div className="domain-search-box">
                <div className="search-box-inner">
                    <form action="#">
                        <input type="text" placeholder="Check a domain" />
                        <span>
                            <select className="domain-list select_design">
                                <option value={1}>.com</option>
                                <option value={2}>.net</option>
                                <option value={3}>.org</option>
                            </select>
                        </span>
                        <button type="submit">Search</button>
                    </form>

                    <div class="results">
                        <div class="result">
                        {data ? <Tree expand={this.state.expanded}/> : "" }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const Tree = props => {
    return <JSONTree labelRenderer={([key]) => <React.Fragment><i className="fad fa-quote-left"></i><strong>{key}</strong></React.Fragment>} invertTheme={true} hideRoot={true} theme={theme} data={data.domain} shouldExpandNode={() => props.expand} />;
};

export default SearchBar