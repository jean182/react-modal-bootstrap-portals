import React from 'react'

import Modal from './components/Modal'

function App() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>, closeDropdown: () => void) => {
    e.preventDefault()
    alert('Submitted succesfully')
    closeDropdown()
  }
  return (
    <div className="container">
      <h1>Bootstrap Modal Example</h1>
      <div className='d-flex justify-content-between'>
        <Modal
          ariaLabel='Modal Example'
          btnClassName="btn btn-primary"
          btnContent='Modal sm'
          size='sm'
          footerChildren={(closeModal) => (
              <button
                type='button'
                className='btn btn-primary'
                onClick={closeModal}
              >
                Close it from the child
              </button>
          )}
          title='Modal Example sm'
        >
          <p>This is a small Modal</p>
        </Modal>
        <Modal
          ariaLabel='Modal Example'
          btnClassName="btn btn-primary"
          btnContent='Modal regular'
          footerChildren={(closeModal) => (
              <button
                type='button'
                className='btn btn-primary'
                onClick={closeModal}
              >
                Close it from the child
              </button>
          )}
          title='Modal Example regular'
        >
          <p>This is a regular Modal</p>
        </Modal>
        <Modal
          ariaLabel='Modal Example lg'
          btnClassName="btn btn-secondary"
          btnContent='Modal lg'
          size='lg'
          footerChildren={(closeModal) => (
              <button
                type='button'
                className='btn btn-primary'
                onClick={closeModal}
              >
                Close it from the child
              </button>
          )}
          title='Modal Example lg'
        >
          <p>This is a large Modal</p>
        </Modal>
        <Modal
          ariaLabel='Modal Example xl'
          btnClassName="btn btn-danger"
          btnContent='Modal xl'
          size='xl'
          footerChildren={(closeModal) => (
              <button
                type='button'
                className='btn btn-primary'
                onClick={closeModal}
              >
                Close it from the child
              </button>
          )}
          title='Modal Example xl'
        >
          <p>This is a extra large Modal</p>
        </Modal>
        <Modal
          ariaLabel='Modal Example center'
          btnClassName="btn btn-info"
          btnContent='Centered Modal'
          center
          footerChildren={(closeModal) => (
              <button
                type='button'
                className='btn btn-primary'
                onClick={closeModal}
              >
                Close it from the child
              </button>
          )}
          title='Modal Example center'
        >
          <p>This is a centered Modal</p>
        </Modal>
        <Modal
          ariaLabel='Modal Example scrollable'
          btnClassName="btn btn-warning"
          btnContent='Scrollable Modal'
          scrollable
          footerChildren={(closeModal) => (
              <button
                type='button'
                className='btn btn-primary'
                onClick={closeModal}
              >
                Close it from the child
              </button>
          )}
          title='Modal Example scrollable'
        >
          <p>What follows is just some placeholder text for this modal dialog. Sipping on Ros??, Silver Lake sun, coming up all lazy. It???s in the palm of your hand now baby. So we hit the boulevard. So make a wish, I'll make it like your birthday everyday. Do you ever feel already buried deep six feet under? It's time to bring out the big balloons. You could've been the greatest. Passport stamps, she's cosmopolitan. Your kiss is cosmic, every move is magic.</p>
          <p>We're living the life. We're doing it right. Open up your heart. I was tryna hit it and quit it. Her love is like a drug. Always leaves a trail of stardust. The girl's a freak, she drive a jeep in Laguna Beach. Fine, fresh, fierce, we got it on lock. All my girls vintage Chanel baby.</p>
          <p>Before you met me I was alright but things were kinda heavy. Peach-pink lips, yeah, everybody stares. This is no big deal. Calling out my name. I could have rewrite your addiction. She's got that, je ne sais quoi, you know it. Heavy is the head that wears the crown. 'Cause, baby, you're a firework. Like thunder gonna shake the ground.</p>
          <p>Just own the night like the 4th of July! I???m gon??? put her in a coma. What you're waiting for, it's time for you to show it off. Can't replace you with a million rings. You open my eyes and I'm ready to go, lead me into the light. And here you are. I???m gon??? put her in a coma. Come on, let your colours burst. So cover your eyes, I have a surprise. As I march alone to a different beat. Glitter all over the room pink flamingos in the pool.</p>
          <p>You just gotta ignite the light and let it shine! Come just as you are to me. Just own the night like the 4th of July. Infect me with your love and fill me with your poison. Come just as you are to me. End of the rainbow looking treasure.</p>
          <p>I can't sleep let's run away and don't ever look back, don't ever look back. I can't sleep let's run away and don't ever look back, don't ever look back. Yes, we make angels cry, raining down on earth from up above. I'm walking on air (tonight). Let you put your hands on me in my skin-tight jeans. Stinging like a bee I earned my stripes. I went from zero, to my own hero. Even brighter than the moon, moon, moon. Make 'em go, 'Aah, aah, aah' as you shoot across the sky-y-y! Why don't you let me stop by?</p>
          <p>Boom, boom, boom. Never made me blink one time. Yeah, you're lucky if you're on her plane. Talk about our future like we had a clue. Oh my God no exaggeration. You're original, cannot be replaced. The girl's a freak, she drive a jeep in Laguna Beach. It's no big deal, it's no big deal, it's no big deal. In another life I would make you stay. I'm ma get your heart racing in my skin-tight jeans. I wanna walk on your wave length and be there when you vibrate Never made me blink one time.</p>
          <p>We'd keep all our promises be us against the world. If you get the chance you better keep her. It's time to bring out the big, big, big, big, big, big balloons. I hope you got a healthy appetite. Don't let the greatness get you down, oh, oh yeah. Yeah, she's footloose and so fancy free. I want the jaw droppin', eye poppin', head turnin', body shockin'. End of the rainbow looking treasure.</p>
        </Modal>
        <Modal
          ariaLabel='Modal Example form'
          btnClassName="btn btn-success"
          btnContent='Form Modal'
          footerChildren={(closeModal) => (
            <>
              <button
                type='button'
                className='btn btn-primary'
                onClick={closeModal}
              >
                Close it from the child
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                form='myForm'
              >
                Send message
              </button>
            </>
          )}
          title='Modal Example center'
        >
          {(closeDropdown) => (
            <form id="myForm" onSubmit={(event) => onSubmit(event, closeDropdown)}>
            <div className="mb-3">
              <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
              <input type="text" className="form-control" id="recipient-name" />
            </div>
            <div className="mb-3">
              <label htmlFor="message-text" className="col-form-label">Message:</label>
              <textarea className="form-control" id="message-text"></textarea>
            </div>
          </form>
          )}
        </Modal>
        <Modal
          ariaLabel='Static Backdrop Modal Example'
          btnClassName="btn btn-light"
          btnContent='Static Backdrop Modal'
          size='sm'
          footerChildren={(closeModal) => (
              <button
                type='button'
                className='btn btn-primary'
                onClick={closeModal}
              >
                Close it from the child
              </button>
          )}
          staticBackdrop
          title='Modal Example Static Backdrop'
        >
          <p>This is a Static Backdrop Modal</p>
        </Modal>
      </div>
    </div>
  );
}

export default App;
