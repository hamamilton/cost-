import React from 'react';
import { 
  MDBContainer,
} from 'mdbreact';
import LinkCard from '../LinkCard';

import './code.css';

const Code = () => {
  return (
    <div id="code">
      <MDBContainer fluid>
            <section id="introduction">
                <p className="description">Styles for inline code snippets and longer, multiline blocks of code.</p>
            </section>

            <hr className="my-3"/>

            <section id="inline-code">
                <h4 className="mb-3 dark-grey-text font-bold"><strong>Inline code</strong></h4>
                <p className="description">Wrap inline snippets of code with <code>&lt;code&gt;</code>. Be sure to escape HTML angle brackets.</p>
                <section>

                    <p>For example, <code>&lt;section&gt;</code> should be wrapped as inline.</p>

                </section>

                <section>
                    <pre className="code-toolbar">
                <code className="language-markup">
For example, &lt;code&gt;&amp;lt;section&amp;gt;&lt;/code&gt; should be wrapped as inline.
                </code>
            </pre>
                </section>

            </section>

            <hr className="my-5"/>

            <section id="code-blocks">

                <h4 className="mb-3 dark-grey-text font-bold"><strong>Code blocks</strong></h4>

                <p className="description">Use <code>&lt;pre&gt;</code>s for multiple lines of code. Once again, be sure to escape any angle brackets
                    in the code for proper rendering. You may optionally add the <code>.pre-scrollable</code> class, which
                    will set a max-height of 350px and provide a y-axis scrollbar.</p>

                <section>

                    <pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
                                &lt;p&gt;And another line of sample text here...&lt;/p&gt;
                                </code></pre>

                </section>

                <section>
                    <pre className="code-toolbar">
                <code className="language-markup">
&lt;pre&gt;&lt;code&gt;&amp;lt;p&amp;gt;Sample text here...&amp;lt;/p&amp;gt;
&amp;lt;p&amp;gt;And another line of sample text here...&amp;lt;/p&amp;gt;
&lt;/code&gt;&lt;/pre&gt;
                                </code>
                                </pre>
                </section>

            </section>

            <hr className="my-5"/>

            <section id="variables">

                <h4 className="mb-3 dark-grey-text font-bold"><strong>Variables</strong></h4>

                <p className="description">For indicating variables use the <code>&lt;var&gt;</code> tag.</p>

                <section>

                    <var>y</var> = <var>m</var><var>x</var> + <var>b</var>

                </section>

                <section>
                    <pre className="code-toolbar">
                <code className="language-markup">
&lt;var&gt;y&lt;/var&gt; = &lt;var&gt;m&lt;/var&gt;&lt;var&gt;x&lt;/var&gt; + &lt;var&gt;b&lt;/var&gt;
                </code>
            </pre>
                </section>

            </section>

            <hr className="my-5"/>

            <section id="user-input">

                <h4 className="mb-3 dark-grey-text font-bold"><strong>User input</strong></h4>

                <p className="description">Use the <code>&lt;kbd&gt;</code> to indicate input that is typically entered via keyboard.</p>

                <section>

                    <p>To switch directories, type <kbd>cd</kbd> followed by the name of the directory.</p>

                    <p>To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
                    </p>

                </section>

                <section>
                    <pre className="code-toolbar">
                <code className="language-markup">
To switch directories, type &lt;kbd&gt;cd&lt;/kbd&gt; followed by the name of the directory.&lt;br&gt;
To edit settings, press &lt;kbd&gt;&lt;kbd&gt;ctrl&lt;/kbd&gt; + &lt;kbd&gt;,&lt;/kbd&gt;&lt;/kbd&gt;
                </code>
            </pre>
                </section>

            </section>

            <hr className="my-5"/>

            <section id="sample-output" className="pb-3">

                <h4 className="mb-3 dark-grey-text font-bold"><strong>Sample output</strong></h4>

                <p className="description">For indicating sample output from a program use the <code>samp</code> tag.</p>

                <section>

                    <samp>This text is meant to be treated as sample output from a computer program.</samp>

                </section>

                <section>
                    <pre className="code-toolbar">
                        <code className="language-markup">
        <samp>This text is meant to be treated as sample output from a computer program.</samp>
                        </code>
                    </pre>
                </section>

            </section>

        <LinkCard docs="https://mdbootstrap.com/docs/react/content/code/"/>

      </MDBContainer>
    </div>
  );
}

export default Code;