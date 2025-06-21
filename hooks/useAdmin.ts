'use client'

import { useState, useEffect, createContext, useContext } from 'react'
import { auth } from '@/firebase/firebaseConfig'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth'

interface AdminContextType {
  user: User | null
  loading: boolean
  isAdmin: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

export function useAdmin() {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}

export function useAdminAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)

  // Admin emails - you can add more here
  const adminEmails = [
    'admin@papex.app',
    'nicolas@papex.app',
    'michael@papex.app',
    'raasinr@gmail.com', // Your admin email
    'nico.courbage@gmail.com', // Nico's admin email
    'mike@series-zero.com', // Mike's admin email
    'michael_khoury@icloud.com', // Michael Khoury's admin email
    'krutartha2002@gmail.com', // Kru's admin email
    // Add your Firebase auth email here
    'test@papex.app',
    'admin@gmail.com',
    'nicolas@gmail.com',
    'michael@gmail.com'
  ]

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Auth state changed:', user ? user.email : 'No user')
      setUser(user)
      const isAdminUser = user ? adminEmails.includes(user.email || '') : false
      console.log('Is admin:', isAdminUser, 'Email:', user?.email)
      setIsAdmin(isAdminUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      return true
    } catch (error) {
      console.error('Login error:', error)
      return false
    }
  }

  const logout = async (): Promise<void> => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return { user, loading, isAdmin, login, logout }
} 