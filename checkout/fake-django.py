from pprint import pprint

from bs4 import BeautifulSoup as bs
from yattag import Doc

rows = ['1', '2', '3', '4', '5']
cols = ['A', 'B', 'C', 'D', 'E']

template_name = 'index-template.html'
output_name = 'index.html'

template_markers = ['<!-- SEATS-BEGIN -->',
                    '<!-- SEATS-END -->']


def generate_html(rows, cols):
    doc, tag, text = Doc().tagtext()

    with tag('li', id='seats', klass='center'):
        with tag('ul'):

            for row in rows:  # list of rows
                with tag('li', id=f'row-{row}'):
                    with tag('ul'):
                        for col in cols:  # for all seats
                            rc = col + row

                            with tag('li'):  # single seat
                                doc.stag('input', type='checkbox', name=rc)

    return doc.getvalue()


if __name__ == '__main__':

    outlines = []

    with open(template_name, 'r') as f:  # open template

        for line in f.readlines():
            outlines.append(line)  # append all to outlines

            if template_markers[0] in line:  # generate HTML at specified place
                print("Found marker!")
                outlines.append(generate_html(rows, cols))

    pprint(outlines)

    outstr = ''.join(outlines)
    outstr = bs(outstr, 'html.parser').prettify()  # prettify it

    with open(output_name, 'w') as f:  # output HTML
        f.write(outstr)
