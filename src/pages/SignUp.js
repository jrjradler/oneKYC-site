import React from "react";
import { Waitlist } from "waitlistapi";

import Header from "../partials/Header";

function SignUp() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">You found us early.</h1>
                <h1 className="h1">Get notified as soon as it's out.</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <Waitlist
                    api_key="1XJ8UK"
                    waitlist_link="http://onekyc.io"
                  />
                  <style jsx>
                    <div classname=".container--waitlistapi margin: 0 auto background-color: #ffffff"></div>
                    <div classname=".button--waitlistapi background-color: #0070F4"></div>
                    <div classname=".statusTextContainer--waitlistapi color: #000000"></div>
                    <div classname=".referralLinkField--text color: #000000"></div>
                  </style>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignUp;
