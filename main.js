const modal = $('#modal')
const close_icon = $('#close-modal')
const hamburger_icon = $('.hamburger-icon')
const img_logo = $('#img_logo')
const img_logo_tablet = $('#img_logo_tablet')


$('#humburger-open').click(function () {
  modal.show()
  hamburger_icon.hide()

})

close_icon.click(function () {
  modal.hide()
  hamburger_icon.show()
})
