import { useState } from 'react'
import DemoLayout from './DemoLayout.jsx'
import Alert from '../../components/ui/Alert.jsx'
import Button from '../../components/ui/Button.jsx'
import Input from '../../components/ui/Input.jsx'
import Select from '../../components/ui/Select.jsx'
import Toggle from '../../components/ui/Toggle.jsx'
import Checkbox from '../../components/ui/Checkbox.jsx'
import './demo.css'

const ROLE_OPTIONS = [
  { value: 'product-designer', label: 'Product Designer' },
  { value: 'engineer', label: 'Engineer' },
  { value: 'product-manager', label: 'Product Manager' },
  { value: 'design-lead', label: 'Design Lead' },
  { value: 'engineering-lead', label: 'Engineering Lead' },
]

export default function AccountSettings() {
  const [showAlert, setShowAlert] = useState(true)
  const [form, setForm] = useState({
    firstName: 'Sarah',
    lastName: 'Chen',
    email: 'sarah.chen@acmecorp.com',
    role: 'product-designer',
  })
  const [prefs, setPrefs] = useState({
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    comments: true,
    assignments: true,
    statusChanges: false,
  })

  function handleSave() {
    setShowAlert(true)
  }

  return (
    <DemoLayout activeItem="Profile">
      <div className="demo-settings-page">
        <h1 className="demo-settings-title">Account Settings</h1>
        <p className="demo-settings-subtitle">Manage your profile, preferences, and notification settings.</p>

        {showAlert && (
          <div className="demo-alert-wrapper">
            <Alert
              type="success"
              title="Profile updated"
              message="Your changes have been saved successfully."
              dismissible
              onDismiss={() => setShowAlert(false)}
            />
          </div>
        )}

        {/* Profile card */}
        <div className="demo-settings-card">
          <div className="demo-settings-card-header">
            <h2 className="demo-settings-card-title">Profile Information</h2>
            <p className="demo-settings-card-desc">Update your name, email address, and role.</p>
          </div>
          <div className="demo-settings-card-body">
            <div className="demo-input-row">
              <Input
                label="First name"
                value={form.firstName}
                onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
              />
              <Input
                label="Last name"
                value={form.lastName}
                onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))}
              />
            </div>
            <Input
              label="Email address"
              type="email"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            />
            <Select
              label="Role"
              value={form.role}
              onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
              options={ROLE_OPTIONS}
            />
          </div>
        </div>

        {/* Preferences card */}
        <div className="demo-settings-card">
          <div className="demo-settings-card-header">
            <h2 className="demo-settings-card-title">Notifications &amp; Preferences</h2>
            <p className="demo-settings-card-desc">Choose how and when you receive updates.</p>
          </div>

          <div className="demo-toggle-row">
            <div>
              <p className="demo-toggle-label">Email notifications</p>
              <p className="demo-toggle-desc">Receive a daily digest of your activity</p>
            </div>
            <Toggle
              checked={prefs.emailNotifications}
              onChange={e => setPrefs(p => ({ ...p, emailNotifications: e.target.checked }))}
            />
          </div>
          <div className="demo-toggle-row">
            <div>
              <p className="demo-toggle-label">Push notifications</p>
              <p className="demo-toggle-desc">Get real-time alerts on your device</p>
            </div>
            <Toggle
              checked={prefs.pushNotifications}
              onChange={e => setPrefs(p => ({ ...p, pushNotifications: e.target.checked }))}
            />
          </div>
          <div className="demo-toggle-row">
            <div>
              <p className="demo-toggle-label">Marketing emails</p>
              <p className="demo-toggle-desc">Product updates, tips, and offers from our team</p>
            </div>
            <Toggle
              checked={prefs.marketingEmails}
              onChange={e => setPrefs(p => ({ ...p, marketingEmails: e.target.checked }))}
            />
          </div>

          <div className="demo-checkbox-section">
            <p className="demo-checkbox-section-label">Notify me about</p>
            <Checkbox
              label="Comments and mentions"
              checked={prefs.comments}
              onChange={e => setPrefs(p => ({ ...p, comments: e.target.checked }))}
            />
            <Checkbox
              label="Task assignments"
              checked={prefs.assignments}
              onChange={e => setPrefs(p => ({ ...p, assignments: e.target.checked }))}
            />
            <Checkbox
              label="Status changes"
              checked={prefs.statusChanges}
              onChange={e => setPrefs(p => ({ ...p, statusChanges: e.target.checked }))}
            />
          </div>
        </div>

        <div className="demo-actions-row">
          <Button variant="secondary" size="md" onClick={() => {}}>Cancel</Button>
          <Button variant="primary" size="md" onClick={handleSave}>Save changes</Button>
        </div>
      </div>
    </DemoLayout>
  )
}
