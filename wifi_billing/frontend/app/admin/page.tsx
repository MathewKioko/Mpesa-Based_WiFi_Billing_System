"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  Activity,
  Users,
  CreditCard,
  Settings,
  Search,
  Download,
  Eye,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  Wifi,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  RefreshCw,
  MoreHorizontal,
  UserX,
  WifiOff,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { ToastProvider } from "@/components/toast-provider"
import { toast } from "sonner"
import { apiClient, type User, type Transaction, type SystemStats, wsClient } from "@/lib/api"
import { useDynamicTitle } from "@/hooks/use-dynamic-title"
import AdminHeader from "@/components/admin/AdminHeader"
import StatsCards from "@/components/admin/StatsCards"
import UserManagement from "@/components/admin/UserManagement"
import PaymentManagement from "@/components/admin/PaymentManagement"
import SystemSettings from "@/components/admin/SystemSettings"
import SupportManagement from "@/components/admin/SupportManagement"

// Main Admin Dashboard Component
export default function AdminDashboard() {
  useDynamicTitle("Admin Dashboard")
  const [activeTab, setActiveTab] = useState("overview")
  const [stats, setStats] = useState<SystemStats | null>(null)
  const router = useRouter()

  // Redirect to home page - admin access disabled
  useEffect(() => {
    router.push('/')
  }, [router])

  // useEffect(() => {
  //   fetchStats()
  //   // Connect to WebSocket for real-time updates
  //   wsClient.connect()

  //   // Listen for real-time updates
  //   const handleUserConnected = (event: CustomEvent) => {
  //     toast.success("User connected", {
  //       description: `${event.detail.phone} is now online`,
  //     })
  //     fetchStats() // Refresh stats
  //   }

  //   const handleUserDisconnected = (event: CustomEvent) => {
  //     toast.info("User disconnected", {
  //       description: `${event.detail.phone} went offline`,
  //     })
  //     fetchStats() // Refresh stats
  //   }

  //   window.addEventListener("user_connected", handleUserConnected as EventListener)
  //   window.addEventListener("user_disconnected", handleUserDisconnected as EventListener)

  //   return () => {
  //     wsClient.disconnect()
  //     window.removeEventListener("user_connected", handleUserConnected as EventListener)
  //     window.removeEventListener("user_disconnected", handleUserDisconnected as EventListener)
  //   }
  // }, [])

  const fetchStats = async () => {
    try {
      const response = await apiClient.getSystemStats()
      if (response.success && response.data) {
        setStats(response.data)
      }
    } catch (error) {
      console.error("Error fetching stats:", error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Access Denied</h1>
        <p className="text-slate-600 dark:text-slate-400">Admin access has been disabled for security reasons.</p>
      </div>
    </div>
  )
}
