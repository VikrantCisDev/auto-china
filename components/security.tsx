"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function SecuritySettingsCards() {

  const inputClass =
  "w-full border border-[#CCCCCC] bg-[#F9FAFB] placeholder:text-[#555555] text-[#555555] text-sm h-12! focus:outline-none focus:ring-1 focus:ring-[#FFB300] focus:border-transparent"

  return (
    <div className="w-full space-y-5">
      <h1 className="text-2xl font-semibold">Security</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
        {/* Card 1 */}
        <Card className="rounded-sm shadow-none border-0">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-medium">
              Authentication
            </CardTitle>
            <Badge className="bg-[#ECFFEB] border-[#D7FFD9] rounded-[4px] text-[#34E340] hover:bg-green-100">
              Active
            </Badge>
          </CardHeader>
          <CardContent className="px-0 space-y-6">
            <div className="flex items-center justify-between gap-4 px-6 pb-6 border-b border-[#EEEEEE]">
              <div>
                <p className="font-medium text-lg">Two-Factor Authentication</p>
                <p className="text-sm text-[#555555]">
                  Required a code via SMS or Authenticator app
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between gap-4 px-6 pb-6 border-b border-[#EEEEEE]">
              <div>
                <p className="font-medium text-lg">Enforce for Sales Manager</p>
                <p className="text-sm text-[#555555]">
                  Mandatory 2FA for staff with access to customer PII
                </p>
              </div>
              <Switch />
            </div>

            <div className="space-y-2 px-6">
              <Label className="text-lg font-medium">
                Session Timeout Duration
              </Label>
              <Select defaultValue="12">
                <SelectTrigger className={inputClass}>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">12 hour (Recommended)</SelectItem>
                  <SelectItem value="8">8 hours</SelectItem>
                  <SelectItem value="1">1 hour</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-[#555555]">
                Users will be automatically logged out after inactivity
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="rounded-sm shadow-none border-0">
          <CardHeader className="flex flex-row items-center justify-between ">
            <CardTitle className="text-xl font-medium">
              Account Security
            </CardTitle>
            <Badge className="bg-[#FFB300] text-black text-sm leading-none">
              2 New
            </Badge>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label className="text-base">Current Password</Label>
              <Input type="password" value="************" className={inputClass} readOnly />
            </div>
            <div className="space-y-2">
              <Label className="text-base">New Password</Label>
              <Input type="password" value="************" className={inputClass} readOnly />
            </div>
            <div className="space-y-2">
              <Label className="text-base">Confirm New Password</Label>
              <Input type="password" value="************" className={inputClass} readOnly />
            </div>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="rounded-sm shadow-none border-0 md:pb-0 pb-3">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-medium">
              Recent Logins
            </CardTitle>
            <Button variant="link" className="text-sm font-semibold text-[#FFB300] p-0 underline leading-none">
              VIEW ALL →
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex items-center justify-between gap-4 px-6 mb-5">
              <div>
                <p className="font-medium text-lg">Two-Factor Authentication</p>
                <p className="text-sm text-[#555555]">
                  Required a code via SMS or Authenticator app
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <Table>
              <TableHeader className="[&_tr]:border-0">
                <TableRow className="bg-[#F6F9FF] text-lg">
                  <TableHead className="px-6 py-3.5">User</TableHead>
                  <TableHead className="px-6 py-3.5">Device</TableHead>
                  <TableHead className="px-6 py-3.5">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="">
                  <TableCell className="text-[#555555] text-base leading-none px-6 py-2">
                    Admin User
                    <br />
                    <span className="text-xs text-muted-foreground">
                      10:45 AM
                    </span>
                  </TableCell>
                  <TableCell className="text-[#555555] text-base leading-none px-6 py-2">Chrome (Win)</TableCell>
                  <TableCell className="text-green-600 font-medium text-base px-6 py-2">
                    Success
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-[#555555] text-base leading-none px-6 py-2">
                    Admin User
                    <br />
                    <span className="text-xs text-muted-foreground">
                      10:45 AM
                    </span>
                  </TableCell>
                  <TableCell className="text-[#555555] text-base leading-none px-6 py-2">Safari (IOS)</TableCell>
                  <TableCell className="text-green-600 font-medium text-base px-6 py-2">
                    Success
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-[#555555] text-base leading-none px-6 py-2">
                    Admin User
                    <br />
                    <span className="text-xs text-muted-foreground">
                      10:45 AM
                    </span>
                  </TableCell>
                  <TableCell className="text-[#555555] text-base leading-none px-6 py-2">Firefox (Mac)</TableCell>
                  <TableCell className="text-red-600 font-medium text-base px-6 py-2">
                    Failed
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-[#555555] text-base leading-none px-6 py-2">
                    Admin User
                    <br />
                    <span className="text-xs text-muted-foreground">
                      10:45 AM
                    </span>
                  </TableCell>
                  <TableCell className="text-[#555555] text-base leading-none px-6 py-2">Firefox (Mac)</TableCell>
                  <TableCell className="text-red-600 font-medium text-base px-6 py-2">
                    Failed
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      {/* ACTION BUTTONS */}
      <div className="flex gap-3 sm:flex-row flex-col">
        <Button className="bg-[#FFB300] text-black hover:bg-[#E6A200] px-6 h-12.5  text-base font-medium">
          Save Changes
        </Button>
        <Button
          variant="outline"
          className="border-[#FFB300] text-[#FFB300] hover:bg-[#FFF6E0] h-12.5 sm:w-36 text-base font-medium"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
