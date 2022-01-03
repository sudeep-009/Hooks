import React from 'react'

const App = () => {
    return (
        <div>
            <form onSubmit={()=>{}}>
                <input name="name" placeholder='Name' />
                <input name="password" placeholder='Password'/>
                <input type='submit' />
            </form>
        </div>
    )
}
export default App
