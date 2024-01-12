import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <form className=" p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-center text-white mb-4">
            My Wine
          </h1>
          <hr />
          <h2 className=" flex justify-center items-center text-2xl font-semibold mb-4">
            Login
          </h2>
          <h2 />
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white-600"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full  border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white-600"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <Link href="/">
              <button
                type="submit"
                className="w-full bg-sky-500 text-white p-3 rounded-md hover:bg-sky-600"
              >
                Log in
              </button>
            </Link>
            <div>
              <Link href="/list-wines/list-wines">list of wines</Link>
              <hr />
              <Link href=".next/server/app/one/two">Test Page</Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
