(function() {

	art_page= {

		init: function () {
			art_page.table();
			art_page.color_adder();
		},

		table: function () {
			$('#create').on('click',function () {
				var pixelroll = $('#pixel-roll').val();
					pixelcolum = $('#pixel-colum').val();
					cellradius = $('#cell-radius').val();
					table = $('#table').find('table');

					for (var i = 0; i <= pixelcolum-1; i++) {
						var count=i;
						table.append('<tr>'+count+'</tr>')
					}
					for (var i=0;i<=pixelroll-1;i++) {
						var count= i;
						table.find('tr').append('<td>'+count+'</td>');
					}
			})
		},

		color_adder: function () {
			
			$('#color').find('button').on('click',function () {
				var current_color=$(this).data('file');
			$('#table td').on('click',function () {
				$(this).css('background',current_color);
			})
			})
		}
	}

	art_page.init();
})();