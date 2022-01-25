const modal = $('#modal')
const close_icon = $('#close-modal')
const hamburger_icon = $('.hamburger-icon')
const img_logo = $('#img_logo')

$('#humburger-open').click(function () {
  modal.show()
  hamburger_icon.hide()
  img_logo.hide()
})

close_icon.click(function () {
  modal.hide()
  hamburger_icon.show()
  img_logo.show()
})
