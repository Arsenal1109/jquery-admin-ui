(function() {

	$.fixedSidebar = function(options) {

		var fs = {
			options: $.extend({
				'element': '#sidebar ul'
			}, options),

			item: $('li', options.element),

			getFullItemHeight: function() {
				return this.item.height()+parseInt(this.item.css('padding'))*2;
			},
			appendPusher: function() {
				return this.item.append('<div class="pusher"></div>')
			},
			setPusherHeight: function() {
				var pusherHeight = this.getFullItemHeight();
				$('.pusher', this.item).css('height', pusherHeight);
			},
			bindHoverEvent: function() {	
				this.item.hover(function() {
					$('.pusher', this).animate({width: "100%"}, 200);
				}, function() {
					$('.pusher', this).animate({width: "0%"}, 200);
				})
			}
		};

		return {
			init: function() {
				fs.appendPusher();
				fs.setPusherHeight();
				fs.bindHoverEvent();
			}
		};
	
	};

	$.marginOffset = function(options) {

		var mo = {
			options: $.extend({
				'element': null,
				'hElement': null,
				'vElement': null
			}, options),

			element: function() {
				return $(options.element);
			},
			hElement: function() {
				return $(options.hElement);	
			},
			vElement: function() {
				return $(options.vElement);
			},

			getHOffset: function() {
				return this.hElement().width();
			},

			getVOffset: function() {
				return this.vElement().height();
			},

			setOffset: function() {
				that = this;
				this.element().css({
					marginLeft: function() {
						return that.getHOffset() 
					},
					marginTop: function() {
						return that.getVOffset();
					}
				})
			}

		}

		mo.setOffset();

	};

	$.makeResponsive = function(options) {
		var mr = {
			options: $.extend({
				// 'breakpoints': [768, 992, 1200],
				'breakpoints': [
					{
						breakpoint: 768, 
						action: function() {

						}
					},
				]
			}, options),

			init: function() {
				breakpoints = this.options.breakpoints;

				for(var i = 0; i < breakpoints.length; i++) {
					console.log(breakpoints[i].breakpoint);
				}

				$(window).resize(function() {
					
				});			
			}
		};

		mr.init();
	}

	$.fixedSidebar({element: '#sidebar ul'}).init()
	$.marginOffset({
		element: '.main_container',
		hElement: '#sidebar', 
		vElement: '.header_container'
	});
	$.makeResponsive({test: ''});

	// $(document).ready(function() {
	// 	//Config
	// 	var root_url = 'http://0.0.0.0:3000/api'

	// 	//Sidebar
	// 	var sidebar = $('#sidebar');
	// 	var menu = $('ul', sidebar);

	// 	menu.item = $('li', menu);
	// 	menu.item_height = menu.item.height() + parseInt(menu.item.css('padding'))*2

	// 	menu.item.append('<div class="pusher"></div>');

	// 	$('.pusher', menu.item).css('height', menu.item_height);

	// 	menu.item.hover(function() {
	// 		$('.pusher', this).animate({width: "100%"}, 200);
	// 	}, function() {
	// 		$('.pusher', this).animate({width: "0%"}, 200);
	// 	})

	// 	//Responsive Elements
	// 	var main_container = $('.main_container');
	// 	var header_container = $('.header_container');

	// 	//Get sidebar width and header height on resize
	// 	var getMainMargins = function() {
	// 		main_container.css({
	// 			marginLeft: function() {
	// 				return sidebar.width();
	// 			}, 
	// 			marginTop: function() {
	// 				if(header_container.css('position') == 'fixed') {
	// 					return header_container.height();
	// 				}
	// 				else {
	// 					return 0;
	// 				}			
	// 			}
	// 		});
	// 	}

	// 	//Initialize margins
	// 	getMainMargins();

	// 	//On Resize, modify margins
	// 	$(window).resize(function() {
	// 		getMainMargins();
	// 	});
		
	// 	//Product Editor
	// 	$('[data-target=edit]').click(function() {
	// 		getMainMargins();
			
	// 		var id = $(this).attr('data-product-id');

	// 		$.get(root_url + '/products/' + id, function(data) {
	// 			main_container.append('<div class="overlay"></div>');
	// 			var overlay = $('.overlay');

	// 			console.log(main_container.width())

	// 			overlay.css({
	// 				width: function() {
	// 					return main_container.width() + parseInt(main_container.css('padding-left'))*2;
	// 				},
	// 				height: function() {
	// 					return main_container.height();
	// 				}
	// 			});

	// 		});
	// 	})
		


	// 	//Clone for demoing, so my HTML isn't too messy.
	// 	product_row = $('#main > .row:first-child');

	// 	for(var i = 0; i < 3; i++)
	// 	product_row.clone().appendTo('#main');

	// });

})();