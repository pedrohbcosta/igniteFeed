import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={ styles.Sidebar }>
      <img className={ styles.cover }
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=50" 
      />

      <div className={ styles.profile }>
        <img className={ styles.avatar } 
          src="https://avatars.githubusercontent.com/u/108188730?v=4" 
        />
        <strong>Pedro Batista</strong>
        <span>Web Developer</span>
      </div>
      
      <footer className={ styles.footer }>
        <a className={ styles.editProfile } href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}