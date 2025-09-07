export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      admin_whitelist: {
        Row: {
          added_at: string | null
          added_by: string | null
          email: string
        }
        Insert: {
          added_at?: string | null
          added_by?: string | null
          email: string
        }
        Update: {
          added_at?: string | null
          added_by?: string | null
          email?: string
        }
        Relationships: [
          {
            foreignKeyName: "admin_whitelist_added_by_fkey"
            columns: ["added_by"]
            isOneToOne: false
            referencedRelation: "mentee_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "admin_whitelist_added_by_fkey"
            columns: ["added_by"]
            isOneToOne: false
            referencedRelation: "mentor_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "admin_whitelist_added_by_fkey"
            columns: ["added_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      enrollments: {
        Row: {
          program_id: string
          role: string
          user_id: string
        }
        Insert: {
          program_id: string
          role: string
          user_id: string
        }
        Update: {
          program_id?: string
          role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "enrollments_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "enrollments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "mentee_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "enrollments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "mentor_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "enrollments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      goal_updates: {
        Row: {
          goal_id: string | null
          id: string
          note: string | null
          noted_at: string | null
          value: number | null
        }
        Insert: {
          goal_id?: string | null
          id?: string
          note?: string | null
          noted_at?: string | null
          value?: number | null
        }
        Update: {
          goal_id?: string | null
          id?: string
          note?: string | null
          noted_at?: string | null
          value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "goal_updates_goal_id_fkey"
            columns: ["goal_id"]
            isOneToOne: false
            referencedRelation: "goals"
            referencedColumns: ["id"]
          },
        ]
      }
      goals: {
        Row: {
          created_at: string | null
          due_at: string | null
          id: string
          mentee_id: string | null
          metric: string | null
          status: string | null
          target: number | null
          title: string
        }
        Insert: {
          created_at?: string | null
          due_at?: string | null
          id?: string
          mentee_id?: string | null
          metric?: string | null
          status?: string | null
          target?: number | null
          title: string
        }
        Update: {
          created_at?: string | null
          due_at?: string | null
          id?: string
          mentee_id?: string | null
          metric?: string | null
          status?: string | null
          target?: number | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "goals_mentee_id_fkey"
            columns: ["mentee_id"]
            isOneToOne: false
            referencedRelation: "mentee_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "goals_mentee_id_fkey"
            columns: ["mentee_id"]
            isOneToOne: false
            referencedRelation: "mentor_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "goals_mentee_id_fkey"
            columns: ["mentee_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      guardian_links: {
        Row: {
          can_message: boolean | null
          can_view_progress: boolean | null
          guardian_id: string
          mentee_id: string
          relation: string | null
        }
        Insert: {
          can_message?: boolean | null
          can_view_progress?: boolean | null
          guardian_id: string
          mentee_id: string
          relation?: string | null
        }
        Update: {
          can_message?: boolean | null
          can_view_progress?: boolean | null
          guardian_id?: string
          mentee_id?: string
          relation?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "guardian_links_guardian_id_fkey"
            columns: ["guardian_id"]
            isOneToOne: false
            referencedRelation: "mentee_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "guardian_links_guardian_id_fkey"
            columns: ["guardian_id"]
            isOneToOne: false
            referencedRelation: "mentor_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "guardian_links_guardian_id_fkey"
            columns: ["guardian_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "guardian_links_mentee_id_fkey"
            columns: ["mentee_id"]
            isOneToOne: false
            referencedRelation: "mentee_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "guardian_links_mentee_id_fkey"
            columns: ["mentee_id"]
            isOneToOne: false
            referencedRelation: "mentor_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "guardian_links_mentee_id_fkey"
            columns: ["mentee_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      kv_store_ae486d13: {
        Row: {
          key: string
          value: Json
        }
        Insert: {
          key: string
          value: Json
        }
        Update: {
          key?: string
          value?: Json
        }
        Relationships: []
      }
      mentors: {
        Row: {
          active: boolean | null
          availability: Json | null
          created_at: string | null
          id: string
          skills: string[] | null
          user_id: string | null
        }
        Insert: {
          active?: boolean | null
          availability?: Json | null
          created_at?: string | null
          id?: string
          skills?: string[] | null
          user_id?: string | null
        }
        Update: {
          active?: boolean | null
          availability?: Json | null
          created_at?: string | null
          id?: string
          skills?: string[] | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mentors_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "mentee_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "mentors_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "mentor_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "mentors_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          body: string
          id: string
          read_at: string | null
          recipient_id: string | null
          sender_id: string | null
          sent_at: string | null
          thread_id: string | null
        }
        Insert: {
          body: string
          id?: string
          read_at?: string | null
          recipient_id?: string | null
          sender_id?: string | null
          sent_at?: string | null
          thread_id?: string | null
        }
        Update: {
          body?: string
          id?: string
          read_at?: string | null
          recipient_id?: string | null
          sender_id?: string | null
          sent_at?: string | null
          thread_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "mentee_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "messages_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "mentor_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "messages_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "mentee_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "mentor_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          created_at: string | null
          id: string
          name: string
          type: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          type?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          type?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          full_name: string
          headline: string | null
          id: string
          role: string
          timezone: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          full_name: string
          headline?: string | null
          id: string
          role: string
          timezone?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          full_name?: string
          headline?: string | null
          id?: string
          role?: string
          timezone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      programs: {
        Row: {
          ends_on: string | null
          id: string
          name: string
          org_id: string | null
          starts_on: string | null
        }
        Insert: {
          ends_on?: string | null
          id?: string
          name: string
          org_id?: string | null
          starts_on?: string | null
        }
        Update: {
          ends_on?: string | null
          id?: string
          name?: string
          org_id?: string | null
          starts_on?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "programs_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      session_requests: {
        Row: {
          id: string
          mentee_id: string | null
          mentor_id: string | null
          proposed_time: string | null
          requested_at: string | null
          status: string | null
        }
        Insert: {
          id?: string
          mentee_id?: string | null
          mentor_id?: string | null
          proposed_time?: string | null
          requested_at?: string | null
          status?: string | null
        }
        Update: {
          id?: string
          mentee_id?: string | null
          mentor_id?: string | null
          proposed_time?: string | null
          requested_at?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "session_requests_mentee_id_fkey"
            columns: ["mentee_id"]
            isOneToOne: false
            referencedRelation: "mentee_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "session_requests_mentee_id_fkey"
            columns: ["mentee_id"]
            isOneToOne: false
            referencedRelation: "mentor_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "session_requests_mentee_id_fkey"
            columns: ["mentee_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_requests_mentor_id_fkey"
            columns: ["mentor_id"]
            isOneToOne: false
            referencedRelation: "mentee_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "session_requests_mentor_id_fkey"
            columns: ["mentor_id"]
            isOneToOne: false
            referencedRelation: "mentor_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "session_requests_mentor_id_fkey"
            columns: ["mentor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      sessions: {
        Row: {
          created_at: string | null
          end_at: string | null
          id: string
          mentee_id: string | null
          mentor_id: string | null
          notes: string | null
          org_id: string | null
          start_at: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          end_at?: string | null
          id?: string
          mentee_id?: string | null
          mentor_id?: string | null
          notes?: string | null
          org_id?: string | null
          start_at?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          end_at?: string | null
          id?: string
          mentee_id?: string | null
          mentor_id?: string | null
          notes?: string | null
          org_id?: string | null
          start_at?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sessions_mentee_id_fkey"
            columns: ["mentee_id"]
            isOneToOne: false
            referencedRelation: "mentee_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "sessions_mentee_id_fkey"
            columns: ["mentee_id"]
            isOneToOne: false
            referencedRelation: "mentor_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "sessions_mentee_id_fkey"
            columns: ["mentee_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sessions_mentor_id_fkey"
            columns: ["mentor_id"]
            isOneToOne: false
            referencedRelation: "mentee_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "sessions_mentor_id_fkey"
            columns: ["mentor_id"]
            isOneToOne: false
            referencedRelation: "mentor_dashboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "sessions_mentor_id_fkey"
            columns: ["mentor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sessions_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      threads: {
        Row: {
          created_at: string | null
          id: string
          org_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          org_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          org_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "threads_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      user_org_roles: {
        Row: {
          created_at: string | null
          org_id: string
          role: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          org_id: string
          role: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          org_id?: string
          role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_org_roles_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      mentee_dashboard: {
        Row: {
          active_sessions_last_month: number | null
          active_sessions_this_month: number | null
          goals_completed: number | null
          goals_progress_pct: number | null
          goals_total: number | null
          hours_this_month: number | null
          hours_total: number | null
          unread_messages: number | null
          user_id: string | null
        }
        Insert: {
          active_sessions_last_month?: never
          active_sessions_this_month?: never
          goals_completed?: never
          goals_progress_pct?: never
          goals_total?: never
          hours_this_month?: never
          hours_total?: never
          unread_messages?: never
          user_id?: string | null
        }
        Update: {
          active_sessions_last_month?: never
          active_sessions_this_month?: never
          goals_completed?: never
          goals_progress_pct?: never
          goals_total?: never
          hours_this_month?: never
          hours_total?: never
          unread_messages?: never
          user_id?: string | null
        }
        Relationships: []
      }
      mentor_dashboard: {
        Row: {
          active_mentees: number | null
          sessions_completed_total: number | null
          sessions_this_month: number | null
          unread_messages: number | null
          user_id: string | null
        }
        Insert: {
          active_mentees?: never
          sessions_completed_total?: never
          sessions_this_month?: never
          unread_messages?: never
          user_id?: string | null
        }
        Update: {
          active_mentees?: never
          sessions_completed_total?: never
          sessions_this_month?: never
          unread_messages?: never
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      citext: {
        Args: { "": boolean } | { "": string } | { "": unknown }
        Returns: string
      }
      citext_hash: {
        Args: { "": string }
        Returns: number
      }
      citextin: {
        Args: { "": unknown }
        Returns: string
      }
      citextout: {
        Args: { "": string }
        Returns: unknown
      }
      citextrecv: {
        Args: { "": unknown }
        Returns: string
      }
      citextsend: {
        Args: { "": string }
        Returns: string
      }
      grant_admin: {
        Args: { p_email: string }
        Returns: undefined
      }
      gtrgm_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_options: {
        Args: { "": unknown }
        Returns: undefined
      }
      gtrgm_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      has_role: {
        Args: { org: string; wanted: string }
        Returns: boolean
      }
      is_guardian_of: {
        Args: { mentee: string }
        Returns: boolean
      }
      is_session_party: {
        Args: { s: Database["public"]["Tables"]["sessions"]["Row"] }
        Returns: boolean
      }
      revoke_admin: {
        Args: { p_email: string }
        Returns: undefined
      }
      set_limit: {
        Args: { "": number }
        Returns: number
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: { "": string }
        Returns: string[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
