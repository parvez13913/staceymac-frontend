'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import ReusableButton from '../reusable/ReuseableBtn';
import { useRouter } from 'next/navigation';

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

export function RegistrationForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (
    password: string
  ): { valid: boolean; message?: string } => {
    if (password.length < 8) {
      return {
        valid: false,
        message: 'Password must be at least 8 characters',
      };
    }
    if (!/[A-Z]/.test(password)) {
      return {
        valid: false,
        message: 'Password must contain at least one uppercase letter',
      };
    }
    if (!/[a-z]/.test(password)) {
      return {
        valid: false,
        message: 'Password must contain at least one lowercase letter',
      };
    }
    if (!/[0-9]/.test(password)) {
      return {
        valid: false,
        message: 'Password must contain at least one number',
      };
    }
    return { valid: true };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else {
      const passwordValidation = validatePassword(password);
      if (!passwordValidation.valid) {
        newErrors.password = passwordValidation.message;
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error('Please fix the errors before submitting');
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Account created successfully!');
      console.log(name, email, password)
      router.push('/dashboard');
    } catch {
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn('flex flex-col', className)} {...props}>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
          Manage employees easily
          <br />
          starting from now!
        </h1>
        <p className="text-gray-500 mt-2">Get started for free today!</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm text-gray-700">
            Name<span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Input your full name"
            value={name}
            onChange={e => {
              setName(e.target.value);
              if (errors.name)
                setErrors(prev => ({ ...prev, name: undefined }));
            }}
            className={cn(
              'h-12 bg-gray-50 border-gray-200 placeholder:text-gray-400',
              errors.name && 'border-red-500 focus-visible:ring-red-500'
            )}
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>

        {/* Work Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm text-gray-700">
            Work Email<span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="example@company.com"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
              if (errors.email)
                setErrors(prev => ({ ...prev, email: undefined }));
            }}
            className={cn(
              'h-12 bg-gray-50 border-gray-200 placeholder:text-gray-400',
              errors.email && 'border-red-500 focus-visible:ring-red-500'
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm text-gray-700">
            Password<span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Input your password account"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
                if (errors.password)
                  setErrors(prev => ({ ...prev, password: undefined }));
              }}
              className={cn(
                'h-12 bg-gray-50 border-gray-200 placeholder:text-gray-400 pr-12',
                errors.password && 'border-red-500 focus-visible:ring-red-500'
              )}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password}</p>
          )}
        </div>

        {/* Submit Button */}
        <ReusableButton
          type="submit"
          className="w-full h-12 bg-primary hover:bg-primary text-white font-medium mt-2 cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </ReusableButton>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <hr className="flex-1 border-gray-200" />
          <span className="text-sm text-gray-400">Or register with</span>
          <hr className="flex-1 border-gray-200" />
        </div>

        {/* Google Button */}
        <ReusableButton
          variant="outline"
          type="button"
          className="w-full h-12 border-gray-200 hover:bg-gray-50 font-medium cursor-pointer"
          disabled={isLoading}
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </ReusableButton>

        {/* Login Link */}
        <p className="text-center text-xs md:text-sm text-gray-500">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-[#27A376] hover:underline font-medium cursor-pointer"
          >
            Login Here
          </a>
        </p>
      </form>
    </div>
  );
}
